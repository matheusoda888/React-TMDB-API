import { useState , useEffect } from "react"
import MovieCard from "../Components/MovieCard"
import './MovieGrid.css'
const moviesURL = import.meta.env.VITE_API

const apiKey = import.meta.env.VITE_API_KEY

const Breve = () => {

  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    // Realizar uma requisição à API de filmes
    const res = await fetch(url)
    // Converter a resposta em formato JSON
    const data = await res.json()
    // // Filtrar os resultados para incluir apenas os filmes lançados após o ano 2000
    // const newTopMovies = data.results.filter(movie => {
    //   // Extrair o ano de lançamento do filme
    //   const releaseYear = new Date(movie.release_date).getFullYear()
    //   // Retornar true se o ano de lançamento for maior que 2000
    //   return releaseYear > 1990
    // })
    // Atualizar o estado com os resultados dos filmes lançados após o ano 2000
    setTopMovies(data.results)
  }

  useEffect(()=>{
    const topRatedUrl = `${moviesURL}upcoming?${apiKey}`

    getTopRatedMovies(topRatedUrl)
  },[])

  return (
    <div className="container">
        <h2 className="title">Em breve:</h2>
        <div className="movies-container">
        {topMovies.length>0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
      
    </div>
  )
}

export default Breve