import Banner from "../components/Banner";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Banner />
      <section className="secao">
        <h2 className="secao-titulo">Bem-vindo ao Cineflix! 🎬</h2>
        <p>Seu catálogo de filmes favorito. Vá em "Filmes" para pesquisar!</p>
      </section>
      <Footer />
    </div>
  );
}