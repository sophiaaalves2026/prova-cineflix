import { Link } from "react-router-dom";

export default function CardFilme({ filme }) {
  return (
    <div className="card-filme">
      <img
        src={filme.Poster !== "N/A" ? filme.Poster : "https://via.placeholder.com/300x450/1e293b/f8fafc?text=Sem+Imagem"}
        alt={filme.Title}
        className="card-poster"
      />
      <div className="card-conteudo">
        <h3 className="card-titulo">{filme.Title}</h3>
        <p className="card-ano">{filme.Year}</p>
        <p className="card-nota">⭐ {filme.imdbRating || "N/A"}</p>
        <Link to={/detalhes/${filme.imdbID}} className="card-link">Ver detalhes →</Link>
      </div>
    </div>
  );
}