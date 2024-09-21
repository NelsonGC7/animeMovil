import {useState, useEffect } from 'react';
import '../styles/App.css';

export function Topanime(){
    const [popularAnimes, setPopularAnimes] = useState([]);
    
    const getPopularAnimes = () => {
        const requestUrl2 = `https://api.jikan.moe/v4/top/anime`;
    
        fetch(requestUrl2)
          .then(response => response.json())
          .then(data => {
            console.log("Top Animes Data:", data.data);
    
            // Obtener solo los 3 animes más populares
            const topPopularAnimes = data.data.slice(0, 3).map(anime => ({
              title: anime.title,
              episodes: anime.episodes,
              score: anime.score,
              aired: anime.aired,
              images: anime.images
            }));
    
            setPopularAnimes(topPopularAnimes);
          })
          .catch(error => {
            console.error('Error al obtener los animes populares:', error);
          });
      };
    
      useEffect(() => {
        getPopularAnimes();
      }, []);
      return (
      <>
      <section className="container">
        <div className="column column2">
        {popularAnimes.map((anime, index) => (
          <div key={index} className="producto">
            <p className='fecha'>
              <small>Puntuación: </small>
              {anime.score}
            </p>
            <br />
            {anime.images?.jpg?.large_image_url && (
              <img className='imgPopu' src={anime.images.jpg.large_image_url} alt={anime.title} />
            )}
            <small>{anime.title}</small>
          </div>
        ))}
      </div>
      </section>
      </>
    );
}
