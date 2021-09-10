import "./style.css"

const CharCard = ({item: {name, id, image, status}}) => {
    
    const nameFiltered = () => {
        if (name.length > 16) {
            return `${name.slice(0, 16)}...`
        } else {
            return name
        }
    }

    return (
        <div key={id} className={status}>  
            <h3>{nameFiltered()}</h3>
            <img src={image} alt=""></img>
        </div>
    )
}

export default CharCard