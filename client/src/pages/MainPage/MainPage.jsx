import { Link } from "react-router-dom"
import "./MainPage.css"
export default function MainPage() {

    return (
        <>
            <div className="container">
                <div className="title-container">
                    <h1 className="title is-1">Zvol operaci</h1>
                </div>
                <div className="columns">
                    <Link className="column" to={"/createcat"}>
                        <p>Cat create form</p>
                    </Link>
                    <Link className="column" to={"/cats"}>
                        <p>Cat list</p>
                    </Link>
                    <Link className="column" to={"/createstudent"}>
                        <p>Student create form</p>
                    </Link>
                    <Link className="column" to={"/students"}>
                        <p>Student list</p>
                    </Link>
                </div>
            </div>
        </>
    )
}