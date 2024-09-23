import '../styles/contenedor.css'

export const Contenedor = ({clas,children})=>{
    return(
        <section className={clas}>
            {children}
        </section>

    )

}