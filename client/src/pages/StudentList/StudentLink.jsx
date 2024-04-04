import { Link } from "react-router-dom"

export default function StudentLink(props) {

    return(
        <>
        <div className="box studentbox">
            <p className="subtitle">Name: {props.name}</p>
            <Link className="student-container" to={`/student/${props.id}`}>
                <p>View student</p>
            </Link>
            </div>
        </>
    )
}