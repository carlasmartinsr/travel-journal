

export default function Card(props){
    return(
      
       <div className="card-container">
        <img src={props.item.imageUrl} alt ={props.item.imageAlt} className="card-img"/>
        <div className="card-content"> 
            <div className="card-location">
                <i className="fa-solid fa-location-dot"></i>     
                <p className="location-country">{props.item. location}</p>
                <a href={props.item.googleMapsUrl} className="location-link">View on Google Maps </a>
            </div>
            <h2>{props.item.title}</h2>
            <p className="card-date">{props.item.startDate} - {props.item.endDate}</p>
            <p className="card-description">{props.item.description}</p>
         </div> 
       </div>
    )
}