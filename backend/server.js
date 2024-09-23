import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@libsql/client';
import { extraCap,extracRecient } from '../scripts/extraCap.js';
import {randomUUID} from  'node:crypto'
import { title } from 'node:process';
import { error } from 'node:console';


dotenv.config()
const PORT = 4266;
const app = express();

//area de ajustes expres 
app.disable('x-powered-by')
app.use(cors());

const turso = createClient({// <-- cliente de la base de datos
    url:process.env.DB_URL,
    authToken:process.env.DB_TOKEN
})

// const test = await turso.execute("SELECT * FROM recientes")
//  console.log(test)


//area de escrapin 


//const recientes  = await  extracRecient()

const recientesDB = ()=>{
    async function uploadEpisodes(id,title,urlimg,capitulo){
       try{
        const setEpisodes = await turso.execute({
            sql:
            `INSERT INTO recientes(id,title,urlimg,capitulo)
            VALUES (:id,:title,:urlimg,:capitulo)`,
            args:{
                id,
                title,
                urlimg,
                capitulo
            }
        })
        return setEpisodes;
       }
       catch(err){
        console.log({
            error:"error al subir un episodio a la db"
        })
       }
    }
    
return  uploadEpisodes();
}

console.log(recientesDB())




app.get('/search',async(req,res)=>{
   const {name,cap} =  req.query;
   console.log(name,cap)
   const result =  await  extraCap(name,cap)
   console.log(result)
    res.send(result)
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})