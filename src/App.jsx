
/*
  import { useState, useEffect } from 'react';
import './styles/App.css';
import { Topanime } from './components/top.jsx';

function App() {
  const [recentAnimes, setRecentAnimes] = useState([]);
  const [previousMonth, setPreviousMonth] = useState(false); // Estado para manejar el mes anterior

  const getRecentAnimes = (getPreviousMonth = false) => {
    const today = new Date();
    const endDate = today.toISOString().split('T')[0];

    const startDate = new Date(today);

    if (getPreviousMonth) {
      startDate.setMonth(today.getMonth() - 2);
    } else {
      // Si es el mes actual, restamos solo 1 mes
      startDate.setMonth(today.getMonth() - 1);
    }

    const startDateFormatted = startDate.toISOString().split('T')[0];



*/

/*
    fetch(requestUrl)
      .then(response => response.json())
      .then(data => {
        console.log("Animes Data:", data.data);
        setRecentAnimes(data.data); // Actualiza el estado con los datos recibidos
      })
      .catch(error => {
        console.error('Error al obtener los animes:', error);
      });
  };

  useEffect(() => {
    getRecentAnimes(previousMonth);
  }, [previousMonth]);

  const handlePreviousMonthClick = () => {
    setPreviousMonth(true); // Cambia el estado para obtener datos del mes anterior
  };
=======
   const [anime,setAnime] = useState([]);
   const [urlimg,setUrlimg] = useState('');
   const [generos,setGeneros]= useState([]);
   const [episode,setEpisode] =  useState(false);
    
    
    
    */
/*
      <header className="section_compani">
        <h1>AnimeTotal</h1>
        <p>new</p>
      </header>

      <section className="container">
        <div className="column">
          {recentAnimes.map((anime, index) => (
            <div key={index} className="producto">
              <p className='fecha'>
                <small>Estreno: </small>
                {anime.aired?.from ? new Date(anime.aired.from).toLocaleDateString() : "Fecha no disponible"}
              </p>
              <br />
              {anime.images?.jpg?.large_image_url && (
                <img src={anime.images.jpg.large_image_url} alt={anime.title} />
              )}
              <p>{anime.title}</p>
              <br/>
              <small>Episodios: {anime.episodes}</small>
            </div>
          ))}
        </div>
      </section>

    
      <button onClick={handlePreviousMonthClick}>Mes antes</button>

      
      <Topanime />
       */
import { Header } from "./components/Header";
import { Media } from "./components/Media";
import { Informacion } from "./components/Informacion";
import { Btonsb } from "./components/Btonsb";
import './styles/app.css';
import { useEffect,useState} from "react";
import { click } from "./utils/click.js";


function App() {

   async function llamada() {
    const res =  await fetch('https://api.jikan.moe/v4/anime?q=bleach-blod-war')
    const data =  await res.json()
    setAnime(data.data[0])
    setUrlimg(data.data[0].images.jpg.image_url)
    setGeneros(data.data[0].genres)
   }
  useEffect(()=>{
   llamada()
  },[])
  return (
    <>
      <Btonsb
        urlimg={'./svgs/back-icon.svg'}
        funcionClick={()=>{
          click(episode,setEpisode)
        }}
      />
       <Header/>
      <section className={`${episode === false ? 'offEpisode': 'onEpisode'}`}>
        <Media/>
        <Informacion
          nombre={anime.title}
          nombreOr={anime.title_japanese}
          fans={anime.members}
          sinopsis={anime.synopsis}
          episodios={anime.episodes}
          urlimg={urlimg}
          genero={generos}
          year={anime.year}
          status={anime.status}
        />
      </section>
    </>
  )
}

export default App
