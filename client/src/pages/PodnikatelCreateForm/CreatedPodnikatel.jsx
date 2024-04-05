import { useParams, Link } from "react-router-dom";

export default function CreatedPodnikatel() {
    const { id } = useParams();
    return(
        <>
            <p>Podnikatel was created: {id}</p>
            <Link to={`/podnikatel/${id}`}>
                <p>View podnikatel</p>
            </Link>
            <Link to={`/`}>
                <p>go back</p>
            </Link>
        </>
    );

}