export const cliker = (e,seteo)=>{
    e.preventDefault()
    const valor = e.target.innerHTML
    seteo(valor)
}