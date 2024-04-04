import { Link } from "react-router-dom"
import "./CatList.css";


export default function CatLink(props) {

    return(
        <>
        <div className="box catbox">
            <p className="subtitle">Name: {props.name}</p>
            <Link className="cat-container" to={`/cat/${props.id}`}>
                <p>View cat</p>
            </Link>
            </div>
        </>
    )
}