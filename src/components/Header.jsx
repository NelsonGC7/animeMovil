
import '/src/styles/header.css'
export const Header =({ children,clas })=>{
 return(
    <header className={`Header ${clas}`}>
       {children}
    </header>


 )
}