import { useParams, Link } from "react-router-dom";

export default function CreatedCar() {
    const { id } = useParams();
    return(
        <>
            <p>Car was created: {id}</p>
            <Link to={`/car/${id}`}>
                <p>View car</p>
            </Link>
            <Link to={`/`}>
                <p>go back</p>
            </Link>
        </>
    );

}