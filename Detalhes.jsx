import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { buscarDetalhes } from "../services/api";
import Footer from "../components/Footer";

export default function Detalhes() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregar() {
      const dados = await buscarDetalhes(id);
      setFilme(dados);
      setCarregando(false);
    }
    carregar();
  }, [id]);

  if (carregando) return <div className="carregando">🔄 Carregando...</div>;
  if (!filme || filme.Error) return <div className="aviso">Filme não encontrado</div>;

  return (
    <div className="detalhes-container">
      <Link to="/catalogo" className="detalhes-voltar">← Voltar para os filmes</Link>
      <div className="detalhes-filme">
        <img src={filme.Poster} alt={filme.Title} className="detalhes-poster" />
        <div className="detalhes-info">
          <h1 className="detalhes-titulo">{filme.Title}</h1>
          <p className="detalhes-linha"><strong>Ano:</strong> {filme.Year} • <strong>Nota:</strong> ⭐ {filme.imdbRating}</p>
          <p className="detalhes-sinopse">{filme.Plot}</p>
          <p className="detalhes-linha"><strong>Diretor:</strong> {filme.Director}</p>
          <p className="detalhes-linha"><strong>Atores:</strong> {filme.Actors}</p>
          <p className="detalhes-linha"><strong>Gênero:</strong> {filme.Genre}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}