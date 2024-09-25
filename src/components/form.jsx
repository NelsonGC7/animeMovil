export const Form = ({ sbmit,input,busqued })=>{
    return(
        <form  onSubmit={sbmit}>
        <input value={input} onChange={busqued} />
       </form>
    )


}