import { Header } from "./components/Header";
import { Media } from "./components/Media";
import { Informacion } from "./components/Informacion";
import { Btonsb } from "./components/Btonsb";
import './styles/app.css';
import { useEffect,useState} from "react";



function App() {

   const [anime,setAnime] = useState([]);
   const [urlimg,setUrlimg] = useState('');
   const [generos,setGeneros]= useState([]);
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
      />
       <Header/>
      {/* <section className="Capactive">
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
      </section> */
      }
      
    </>
  )
}

export default App
