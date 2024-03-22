import { Link, useParams } from "react-router-dom";


export default function StudentDeleted() {
    const { id } = useParams();


    return (
        <>
            <p>
                Student {id} was deleted
            </p>
            <Link to={"/"}>
            <p>
                Go home
            </p>
            </Link>
        </>
    )
}