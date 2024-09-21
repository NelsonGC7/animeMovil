import express from 'express';
import cors from 'cors';
const PORT = 4266;
const app = express();


app.use(cors());

app.get('/hola',(req,res)=>{
    res.send('hello word')
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})