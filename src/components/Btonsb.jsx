
import '../styles/btonsb.css'
export const Btonsb =({ urlimg,funcionClick,clas,tipo})=>{
    return(
        <button onClick={funcionClick} className={clas} type={tipo} for='bton'>
            <img src={urlimg} alt="lupa/back" />
        </button>
    )
}