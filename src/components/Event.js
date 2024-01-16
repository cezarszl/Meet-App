import { useState } from "react";

const Event = ({ event }) => {
    const [showDetails, setshowDetails] = useState(false)


    return (
        <li id='list-item'>
            <h2>{event.summary}</h2>
            <p>{event.location}</p>

            <button className="details-btn" onClick={() => {
                setshowDetails(!showDetails)
            }}>{showDetails ? 'Hide it' : 'Show more'}</button>



            {showDetails ? (
                <div id="details">
                    <p>{event.start.dateTime}</p>
                    <p>{event.description}</p>
                </div>
            ) : null}


        </li>
    )
}


export default Event;