import React from "react"

export default function Travel(props){
    return(
        <div className="travel">
            <img src={props.imageUrl} />
            <div className="content">
                <div className="location">
                    <img src="../images/Fill219.png" />
                    <span>{props.location}</span>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
            <hr/>
        </div>
    )
}