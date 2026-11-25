import { useState } from "react";
import { buscarFilmes } from "../services/api";
import CardFilme from "../components/CardFilme";
import Footer from "../components/Footer";

export default function Catalogo() {
  const [termo, setTermo] = useState("");
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  async function handleBuscar(e) {
    e.preventDefault();
    if (!termo.trim()) return;
    setCarregando(true);
    setErro("");
    setFilmes([]);
    const dados = await buscarFilmes(termo);
    if (dados.Search) setFilmes(dados.Search);
    else setErro(dados.Error || "Nenhum filme encontrado");
    setCarregando(false);
  }

  return (
    <div>
      <section className="secao">
        <h2 className="secao-titulo">🎞️ Catálogo de Filmes</h2>
        <form onSubmit={handleBuscar} className="pesquisa-container">
          <input
            type="text"
            className="pesquisa-input"
            placeholder="Digite o nome do filme..."
            value={termo}
            onChange={(e) => setTermo(e.target.value)}
          />
          <button type="submit" className="pesquisa-btn">Buscar</button>
        </form>

        {carregando && <p className="carregando">🔄 Buscando...</p>}
        {erro && <p className="aviso">⚠️ {erro}</p>}

        {filmes.length > 0 && (
          <div className="filmes-grade">
            {filmes.map(f => <CardFilme key={f.imdbID} filme={f} />)}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}