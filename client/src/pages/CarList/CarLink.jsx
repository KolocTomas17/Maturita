import { Link } from "react-router-dom"
import "./CarList.css";


export default function CarLink(props) {

    return(
        <>
        <div className="box carbox">
            <p className="subtitle">Name: {props.name}</p>
            <Link className="car-container" to={`/car/${props.id}`}>
                <p>View car</p>
            </Link>
            </div>
        </>
    )
}