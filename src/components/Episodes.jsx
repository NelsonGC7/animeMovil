import '../styles/episodes.css'


export const Episodes = ({name,cap,clas}) => {
    return(
        <aside className={clas}>
        <h2>{name}</h2>
        <div className="episodes" > 
            <div className="episodes_box">
                <p>{cap}</p>
            </div>
        </div>
        </aside>

    )


}