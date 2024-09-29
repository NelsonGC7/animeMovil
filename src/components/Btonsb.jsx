
import '../styles/btonsb.css'



export const Btonsb =({ urlimg,funcionClick,clas })=>{


    return(
        <button onClick={funcionClick} className={clas}>
            <img src={urlimg} alt="lupa/back" />
        </button>
    )
}