export function Contatos() {
  return (
    <div>
      <h1>Contate-nos</h1>
      <p>Email: contato@lashdesigner.com</p>
      <p>Telefone: (11) 99999-9999</p>
      <form>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" />
        <br />
        <label htmlFor="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
export default Contatos;
