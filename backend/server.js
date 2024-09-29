import express from 'express';
import cors from 'cors';
import { extraCap,extracRecient } from '../scripts/escrapin.js';
import { uploadEpisode,recentEoisodes,delRecientes } from './utils/dbScripts.js';



const PORT = 4266;
const app = express();

//area de ajustes expres 
app.disable('x-powered-by')
app.use(cors());



const uplodaRecients= async()=>{
    const delet = await  delRecientes()
    const listEpisodes =  await extracRecient();
    for(let i = 0; i < listEpisodes.length ;i++){
        const episodio = await listEpisodes[i];
       const subida = await uploadEpisode(episodio.title,episodio.urlimg,episodio.episode)
        console.log(subida.rowsAffected)
    }

}
uplodaRecients()
setInterval(() => {
    uplodaRecients();
}, 86400000);



app.get('/recientes', async(req,res)=>{
    const resultado = await recentEoisodes();
    res.json(resultado).status(200)
})

app.get('/search',async(req,res)=>{
   const {name,cap} =  req.query;
   const result =  await  extraCap(name,cap)
    res.send(result)
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})