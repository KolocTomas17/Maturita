import { Link } from "react-router-dom"

export default function CatList() {

    return(
        <>
        <h1>Cat list form</h1>
        <Link to={"/"}>
            <p>Go back</p>
        </Link>
        </>
    )
}