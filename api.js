const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export const buscarFilmes = async (titulo, pagina = 1) => {
  try {
    const res = await fetch(${BASE_URL}?apikey${API_KEY}&s${titulo}&page${pagina}&typemovie);
    return await res.json();
  } catch (err) {
    console.error(err);
    return { Error: "Erro de conexão" };
  }
};

export const buscarDetalhes = async (imdbID) => {
  try {
    const res = await fetch(${BASE_URL}?apikey=${API_KEY}&i${imdbID}&plotfull);
    return await res.json();
  } catch (err) {
    console.error(err);
    return { Error: "Não encontrado" };
  }
};