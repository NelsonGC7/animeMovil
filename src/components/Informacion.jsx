import '../styles/informacion.css'

export const Informacion = ({ nombre,nombreOr,fans,sinopsis,episodios,urlimg,year,status,genero})=>{

    return(
        <section className="Inforanime">
            <div className="Inforanime-punteo">
                <figure>
                    <img src="/svgs/star-icon.svg" alt="star" />
                    <img src="/svgs/star-icon.svg" alt="star" />
                    <img src="/svgs/star-icon.svg" alt="star" />
                    <img src="/svgs/star-icon.svg" alt="star" />
                    <img src="/svgs/star-icon.svg" alt="star" />
                </figure>
                <div>
                    <p><strong>fans:</strong>{fans}+</p>
                </div>
            </div>
            <h1>Nombre Original:{nombreOr}</h1>
            <section className="Inforanime-info">
                <div id='info'>
                    <h2>{nombre}</h2>
                    <h5>Información</h5>
                    <div id='genres'>
                         {
                            genero.map(gen=>{
                                return(
                                    <>
                                    <p key={gen.mal_id}>{gen.name}</p>
                                    </>
                                )
                            })
                         }
                    </div>
                    <div  className="Inforanime-info-text">
                        <p>{sinopsis}</p>
                    </div>
                </div>
                <div className="Inforanime-info-img">
                    <img src={urlimg} alt="" />

                 
                    <div>
                        <p><strong>Year/</strong> {year}</p>
                        <p><strong>Cap/</strong>{episodios}</p>
                        <p>{status}</p>
                    </div>
                </div>



            </section>
            



            

        </section>


    );


}