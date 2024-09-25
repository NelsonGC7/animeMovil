export const Form = ({ sbmit,input,busqued })=>{
    return(
        <form action="" onSubmit={sbmit}>
        <input value={input} onChange={busqued} />
       </form>
    )


}