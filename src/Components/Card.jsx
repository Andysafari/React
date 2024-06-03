import "./Card.css"

function Card(props) { 
    return (
    <div className="container">  
        <h1> { props.name } </h1> 
        <h2> { props.city} </h2> 
        <h3> { props.job } </h3> 
     </div> 
    )
} 

export default Card;