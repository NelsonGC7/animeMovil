import { Contenedor } from "./components/Contenedor.jsx";
import { Header } from "./components/Header";
import { Media } from "./components/Media";
import { Informacion } from "./components/Informacion";
import { Btonsb } from "./components/Btonsb";
import { Episodes } from "./components/Episodes.jsx";
import { Childcontein,ChildconteinList,
        ChildconteinBest,ChildconteinSearch } from "./components/Childcontein.jsx";
import { Form } from "./components/form.jsx";
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
  const [recientes,setRecientes]=useState([])
  const [search,setSearch]=useState(false)
  const [input,setInput]=useState('')
  const [bsqueda,setBsqueda]=useState(false)
  // useEffect(()=>{
  //   async function infoCap() {
  //     const res =  await fetch(`https://api.jikan.moe/v4/anime?q=${title}`)
  //     const data =  await res.json();
  //     setAnime(data.data[0]);
  //     setUrlimg(data.data[0].images.jpg.image_url);
  //     setGeneros(data.data[0].genres);
      
  //   }
  //   infoCap();
  // },[])
  
 
  useEffect(()=>{
    const capRecientes = async ()=>{
      const res  = await fetch('http://127.0.0.1:4266/recientes');
      const data =  await res.json()
      setRecientes(data);
    }
   capRecientes();  
  },[])

  function sbmit(e){
    e.preventDefault()

  }
  function busqueda (e){
    setInput(e.target.value)
  }
  console.log(input)

  return (
    <>
      <Btonsb urlimg={'./svgs/back-icon.svg'}
        funcionClick={()=>{
          click(episode,setEpisode)
        }}
        clas={"BtonSB"}/>
       <Header
        clas={search?"Headeractive":''}
       >
       <h1>An1mescraP</h1>
       <Form
        sbmit={sbmit}
        input={input}
        busqued={busqueda}
       />
       <Btonsb
          
          urlimg={"./svgs/search-icon.svg"} 
          tipo="submit"
          funcionClick={()=>{
            if(!search){
              click(search,setSearch);
            }else{
              const clean = input.trim()
              if(clean.length !==0){
                setBsqueda(true);
                setInput('')
                // setSearch(false)
                
              }
            }

          }}
        />
        <Btonsb 
          urlimg={"./svgs/menu-icon.svg"} 
          funcionClick={()=>{click(slides,setSlides)}}
        />
       </Header>
       <Contenedor clas={episode != true ? "onRecent":"offRecent" } >
        <Childcontein clas={"childcontein-left"}>
          <h4>Capitulos Recientes</h4>
          {
            recientes.map(cap=>{
              return(
              <ChildconteinList
                urlimg={cap.urlimg}
                title={cap.title}
                capitulo={cap.capitulo}
              />

              )
            })
          }
        </Childcontein>
        <Childcontein clas="childcontein-right">
          <h4>Top Semanal</h4>
          <ChildconteinBest
            urlimg='./images/prub1.jpg'
            nombre={'One piece'}
          />
          <ChildconteinBest
            urlimg='./images/prub1.jpg'
            nombre={'One piece'}
          />
          <ChildconteinBest
            urlimg='./images/prub1.jpg'
            nombre={'One piece'}
          />
        </Childcontein>
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
      <Contenedor clas={ bsqueda ? 'onBusqueda':'offBusqueda'}>
        <ChildconteinSearch
          urlimg='./images/prub1.jpg'
          capitulos={12}
          nombre={'Sword Art Online'}

        />
      </Contenedor>
    </>
  )
}

export default App
