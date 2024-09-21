import { useState, useEffect } from 'react';
import './styles/App.css';
import {Topanime} from './components/top.jsx'

function App() {
  const [recentAnimes, setRecentAnimes] = useState([]);
  const getRecentAnimes = () => {
    const today = new Date();
    const endDate = today.toISOString().split('T')[0];
    const startDate = new Date(today);
    startDate.setMonth(today.getMonth() - 1);
    const startDateFormatted = startDate.toISOString().split('T')[0];

    const requestUrl = `https://api.jikan.moe/v4/anime?start_date=${startDateFormatted}&end_date=${endDate}`;

    fetch(requestUrl)
      .then(response => response.json())
      .then(data => {
        console.log("Animes Data:", data.data);
        setRecentAnimes(data.data);
      })
      .catch(error => {
        console.error('Error al obtener los animes:', error);
      });
  };
  useEffect(() => {
    getRecentAnimes();
  }, []);

  return (
    <>
      <header className="section_compani">
        <h1>AnimeTotal</h1>
        <p> new</p>
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
              <p>Episodios: {anime.episodes}</p>
            </div>
          ))}
        </div>
      </section>
      <Topanime/>
    </>
  );
}

export default App;
