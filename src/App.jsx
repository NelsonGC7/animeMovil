import { Contenedor } from "./components/Contenedor.jsx";
import { Header } from "./components/Header";
import { Media } from "./components/Media";
import { Informacion } from "./components/Informacion";
import { Btonsb } from "./components/Btonsb";
import { Episodes } from "./components/Episodes.jsx";
import { useEffect,useState} from "react";
import { click } from "./utils/click.js";
import { cliker } from "./utils/cliker.js";
import './styles/app.css';


const iframesSrc = {
  "title": "Bleach Episodio 7",
  "MEGA": "https://mega.nz/embed/!QwNkECqJ!Aze_UmczHrj8Tz6NWcXV4zgfkzuOqwuWzUllJbyI3LE",
  "MV": "https://www.yourupload.com/embed/3u2LWF30TIFT"
};
const title =  iframesSrc.title.split(' ')[0];

function App() {
  const [anime,setAnime] = useState([]);
  const [urlimg,setUrlimg] = useState('');
  const [generos,setGeneros]= useState([]);
  const [urlframe,setUrlframe]= useState('');
  const [episode,setEpisode] =  useState(false);
  const [slides,setSlides] = useState(false);

   async function llamada() {
    const res =  await fetch(`https://api.jikan.moe/v4/anime?q=${title}`)
    const data =  await res.json();
    setAnime(data.data[0]);
    setUrlimg(data.data[0].images.jpg.image_url);
    setGeneros(data.data[0].genres);
   }
  useEffect(()=>{
   llamada()
  },[])
  return (
    <>
      <Btonsb urlimg={'./svgs/back-icon.svg'}
        funcionClick={()=>{
          click(episode,setEpisode)
        }}
        clas={"BtonSB"}
      />
       <Header>
        <Btonsb 
          urlimg={"./svgs/menu-icon.svg"} 
          funcionClick={()=>{click(slides,setSlides)}}
        />
       </Header>
       <Contenedor clas={episode != true ? "onRecent":"offRecent" } >
        

       </Contenedor>

        <Contenedor clas={`${episode === false ? 'offEpisode': 'onEpisode'}`}>
          <Episodes clas={slides ? "onCapitulos":"offCapitulos"} />
          <Media
            urliframe={urlframe === 'MEGA'?iframesSrc.MEGA:iframesSrc.MV}
            no1={'MEGA'}
            no2={'MV'}
            cliker={(e)=>{cliker(e,setUrlframe)}}
          />
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
      </Contenedor>
    </>
  )
}

export default App
