import '../styles/contenedor.css'
import '../styles/busqueda.css'

export const Contenedor = ({clas,children})=>{
    return(
        <section className={clas}>
            {children}
        </section>

    )

}