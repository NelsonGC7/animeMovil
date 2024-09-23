import { createClient } from '@libsql/client';
import dotenv from  'dotenv';
import {randomUUID} from  'node:crypto'
dotenv.config()


const turso = createClient({
    url:process.env.DB_URL,
    authToken:process.env.DB_TOKEN
})


export async function uploadEpisode(title,urlimg,capitulo){
    try{
     const setEpisodes = await turso.execute({
         sql:
         `INSERT INTO recientes(id,title,urlimg,capitulo)
         VALUES (:id,:title,:urlimg,:capitulo)`,
         args:{
             id:randomUUID(),
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

export async function recentEoisodes() {
    try{
        const recientes = await turso.execute('SELECT * FROM recientes');
        return recientes.rows
    }
    catch(err){
        console.log({
            error:"error en la traer los cap mas recientes"
        })
    }
    
}