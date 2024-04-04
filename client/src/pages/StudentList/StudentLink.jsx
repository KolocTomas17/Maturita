import { Link } from "react-router-dom"

export default function StudentLink(props) {

    return(
        <>
        <div className="box">
            <p>Name: {props.name}</p>
            <Link to={`/student/${props.id}`}>
                <p>View student</p>
            </Link>
            </div>
        </>
    )
}