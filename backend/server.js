import express from 'express';
import cors from 'cors';
import { extraCap } from '../scripts/extraCap.js';
const PORT = 4266;
const app = express();


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