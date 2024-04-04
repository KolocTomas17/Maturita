import { Link } from "react-router-dom";
import CatLink from "./CatLink";
import { useState, useEffect } from "react";
import { getAllCats } from "../../models/Cat";
import "./CatList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function CatList() {
    const [cats, setCats] = useState();
    const [loaded, setLoaded] = useState(false);

    const load = async () => {
        const data = await getAllCats();
        if (data.status === 500 || data.status === 404) return setLoaded(null);
        if (data.status === 200) {
            setCats(data.payload);
            setLoaded(true);
        }
    }

    useEffect(() => {
        load();
    }, []);

    if(load === null) {
        return(
            <>
                <p>Cats not found</p>
            </>
        );
    }
    if(!loaded) {
        return(
            <>
                <p>Cats are loading...</p>
            </>
        );
    }

    return(
        <>
        <div className="CatListContainer">
                <div className="cat-title-container">
                <h1 className="title is-1">Cat list form</h1>
                </div>
        
        {
            cats.map((cat, index) => (
                <CatLink className="cat-container" key={index} name={cat.name} id={cat._id} />
            ))
        }
        <Link to={"/"}>
            <FontAwesomeIcon icon={faArrowLeft} size="2x" color="black"/>
        </Link>
        </div>
        </>
    )
}