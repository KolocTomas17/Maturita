import { Link, useParams } from "react-router-dom";


export default function CarDeleted() {
    const { id } = useParams();


    return (
        <>
            <p>
                Your Car {id} was deleted
            </p>
            <Link to={"/"}>
            <p>
                Go home
            </p>
            </Link>
        </>
    )
}