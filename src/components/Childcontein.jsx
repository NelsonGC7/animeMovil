import '../styles/childcontein.css'
import '../styles/childcontein_list.css'

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