import { Link } from "react-router-dom"
import "./PodnikatelList.css";


export default function PodnikatelLink(props) {

    return(
        <>
        <div className="box podnikatelbox">
            <p className="subtitle">Name: {props.name}</p>
            <Link className="podnikatel-container" to={`/podnikatel/${props.id}`}>
                <p>View podnikatel</p>
            </Link>
            </div>
        </>
    )
}