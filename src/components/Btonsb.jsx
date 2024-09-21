
import '../styles/btonsb.css'



export const Btonsb =({ urlimg,funcionClick })=>{


    return(
        <button onClick={funcionClick} className="BtonSB">
            <img src={urlimg} alt="lupa/back" />
        </button>
    )
}