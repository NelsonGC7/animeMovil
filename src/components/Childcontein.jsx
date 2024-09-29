import '../styles/childcontein.css'
import '../styles/childcontein_list.css'
import '../styles/childcontein_best.css'
import '../styles/childcontein_search.css'


export const Childcontein = ({ children ,clas })=>{
    return (
        <ul className={ clas }>
            { children }
        </ul>

    )
}
export const ChildconteinList = ({ urlimg,capitulo,title })=>{
    return(

        <li className='childconteinlist'>
            <figure>
            <img src={ urlimg } alt="..." />
            <p>{capitulo}</p>
            </figure>
            <h2>{ title }</h2>
        </li>
    )
}

export const ChildconteinBest = ({ urlimg,nombre,punteo })=>{
    return(
        <li className='childconteinbest' title={nombre}>
            <figure title={nombre}>
                <img src={urlimg} alt="..." />
                <div>
                    <h3>{nombre}</h3>
                    <figure>
                        <img src="./svgs/starYellow.svg" alt="" />
                        <img src="./svgs/starYellow.svg" alt="" />
                        <img src="./svgs/starYellow.svg" alt="" />
                        <img src="./svgs/starYellow.svg" alt="" />
                        <img src="./svgs/starYellow.svg" alt="" />
                    </figure>
                    <p>{punteo}</p>
                </div>
            </figure>
        </li>
    )

}

export const ChildconteinSearch = ({ urlimg,capitulos,nombre})=>{
    return(
        <li className='childconteinsearch'>
            <img src={ urlimg } alt="" />
            <div>
                <p><strong>Capitulos:</strong>{capitulos}</p>
                <p><strong>Nombre:</strong>{nombre}</p>
            </div>
        </li>


    )


}