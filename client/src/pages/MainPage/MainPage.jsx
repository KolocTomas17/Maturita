import { Link } from "react-router-dom"
export default function MainPage() {

    return(
        <>

            <Link to={"/createcat"}>
                <p>Cat create form</p>
            </Link>

            <Link to={"/cats"}>
             <p>Cat list</p>
            </Link>

            <Link to={"/createstudent"}>
                <p>Student create form</p>
            </Link>

            <Link to={"/students"}>
             <p>Student list</p>
            </Link>

        </>
    )
}