import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner-conteudo">
        <span style={{color: "#94a3b8"}}>DESTAQUE</span>
        <h2>Interestelar</h2>
        <p>Uma missão para salvar a humanidade através de um buraco de minhoca no espaço.</p>
        <div className="nota">⭐ 8.7 / 10</div>
        <br />
        <Link to="/detalhes/tt0816692">
          <button className="btn-destaque">Ver detalhes →</button>
        </Link>
      </div>
    </section>
  );
}