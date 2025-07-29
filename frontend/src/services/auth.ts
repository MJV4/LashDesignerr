import api from "./api";

// autenticação do cadastro de usuários
type NewUser = {
  name: string;
  birthdate: string;
  gender: string;
  email: string;
  password: string;
};

export async function registerUser(data: NewUser) {
  const response = await api.post("/register", data);
  return response.data;
}
//autenticação do login de usuários
interface LoginRequestBody {
  email: string;
  password: string;
}

export async function loginUser(data: LoginRequestBody) {
  const response = await api.post("/login", data);
  return response.data;
}
