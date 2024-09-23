import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@libsql/client';
import { extraCap } from '../scripts/extraCap.js';

dotenv.config()
const PORT = 4266;
const app = express();


const turso = createClient({
    url:process.env.DB_URL,
    authToken:process.env.DB_TOKEN
})

const test = await turso.execute("SELECT * FROM recientes")
 console.log(test)

app.use(cors());

app.get('/search',async(req,res)=>{
   const {name,cap} =  req.query;
   console.log(name,cap)
   const result =  await  extraCap(name,cap)
    res.send(result)
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})