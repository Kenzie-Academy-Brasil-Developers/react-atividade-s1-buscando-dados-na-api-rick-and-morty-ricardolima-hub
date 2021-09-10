import "./style.css"
import CharCard from "../CharCard";

function Characters ({characterList}) {

    return (
        <>
            <h2>Meus Personagens</h2>
            <div className="container">
                {characterList.map((item)=> (
                    <CharCard item={item}/>
                ))}
            </div>
        </>
    )
}

export default Characters;