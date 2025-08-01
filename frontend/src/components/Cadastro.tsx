import React, { useState, useMemo } from "react";
import { registerUser, loginUser } from "../services/auth";
import { AxiosError } from "axios";

type PasswordValidation = {
  length: boolean;
  maiuscula: boolean;
  minuscula: boolean;
  numero: boolean;
  simbolo: boolean;
};

const validaSenha = (senha: string): PasswordValidation => ({
  length: senha.length >= 6,
  maiuscula: /[A-Z]/.test(senha),
  minuscula: /[a-z]/.test(senha),
  numero: /\d/.test(senha),
  simbolo: /[\W_]/.test(senha),
});

export function Cadastro() {
  const [modo, setModo] = useState("login");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirma, setConfirma] = useState("");
  const [erro, setErro] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");

  const valida = useMemo(() => validaSenha(senha), [senha]);
  const score = Object.values(valida).filter(Boolean).length;
  const cores = [
    "bg-danger",
    "bg-warning",
    "bg-info",
    "bg-primary",
    "bg-success",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErro("");

    if (modo === "cadastro") {
      if (score < 5) {
        return setErro(
          "Senha fraca: mínimo 6 chars, maiúscula, minúscula, número e símbolo."
        );
      }
      if (senha !== confirma) {
        return setErro("Senhas não conferem.");
      }

      try {
        await registerUser({
          name: nome,
          email,
          password: senha,
          birthdate,
          gender,
        });
        alert("Cadastro realizado com sucesso!");
        trocaModo();
      } catch (err: unknown) {
        const error = err as AxiosError<{ error: string }>;
        setErro(error.response?.data?.error || "Erro ao cadastrar.");
      }
    } else {
      try {
        const data = await loginUser({ email, password: senha });
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        alert(`Login efetuado! Bem vindo, ${nome}!`);
      } catch (err: unknown) {
        const error = err as AxiosError<{ error: string }>;
        setErro(error.response?.data?.error || "Erro ao efetuar login.");
      }
    }
  };

  const trocaModo = () => {
    setModo(modo === "login" ? "cadastro" : "login");
    setErro("");
    setNome("");
    setEmail("");
    setSenha("");
    setConfirma("");
    setBirthdate("");
    setGender("");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h2 className="text-center mb-4 text-xl font-bold">
        {modo === "login" ? "Login" : "Cadastro"}
      </h2>
      <form onSubmit={handleSubmit}>
        {modo === "cadastro" && (
          <>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <input
              type="date"
              className="form-control mb-3"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
            />
            <select
              className="form-control mb-3"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Selecione o Gênero</option>
              <option value="Feminino">Feminino</option>
              <option value="Masculino">Masculino</option>
              <option value="Outro">Outro</option>
            </select>
          </>
        )}
        <input
          type="email"
          className="form-control mb-3"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control mb-1"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          autoComplete={modo === "login" ? "current-password" : "new-password"}
        />
        {modo === "cadastro" && (
          <>
            <div className="progress mb-1" style={{ height: 8 }}>
              <div
                className={`progress-bar ${cores[score - 1] || "bg-danger"}`}
                style={{ width: `${(score / 5) * 100}%` }}
              />
            </div>
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Confirmar Senha"
              value={confirma}
              onChange={(e) => setConfirma(e.target.value)}
              required
              autoComplete="new-password"
            />
          </>
        )}
        {erro && <div className="alert alert-danger">{erro}</div>}
        <button type="submit" className="btn btn-primary w-100 mb-2 my-5">
          {modo === "login" ? "Entrar" : "Cadastrar"}
        </button>
        <button
          type="button"
          className="btn btn-link w-100"
          onClick={trocaModo}
        >
          {modo === "login"
            ? "Não tem conta? Cadastre-se"
            : "Já tem conta? Faça login"}
        </button>
      </form>
    </div>
  );
}
