import '../styles/media.css'
// import fs from 'node:fs';

// fs.readFile('../data.json','utf8',(error,data)=>{
//     if(error){
//          console.log(error);
//     }else{
//         const dataJson = JSON.parse(data)
//         console.log(dataJson);
//     }
// })

export const Media =({ urliframe,no1,no2,cliker })=>{
    return(
        <section className="Media" >
            <figure className='Media-frame'>
            <iframe src={ urliframe } allowFullScreen  aria-controls="1" allow="autoplay; encrypted-media"></iframe>
            </figure>
            <div className="Media-reframe">
                <a href="#" onClick={cliker}>{no1}</a>
                <a href="#" onClick={cliker}>{no2}</a>
                <a href="#" >{'none'}</a>
            </div>
        </section>        
    );
}