import { Link } from "react-router-dom"
export default function MainPage() {

    return(
        <>
            <Link to={"/cat/jj"}>
                <p>Cat view</p>
            </Link>

            <Link to={"/createcat"}>
                <p>Cat create form</p>
            </Link>

            <Link to={"/updatecat/jj"}>
                <p>Cat update form</p>
            </Link>

            <Link to={"/cats"}>
             <p>Cat list</p>
            </Link>


            
            
            
            
        </>
    )
}