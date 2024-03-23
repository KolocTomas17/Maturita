import { Link, useParams, useNavigate } from "react-router-dom";
import { getCatById, deleteCat } from "../../models/Cat";
import { useEffect, useState } from "react";

export default function CatView() {
    const { id } = useParams();
    const [cat, setCat] = useState();
    const [loaded, setLoaded] = useState();
    const [FormData, setFormData] = useState();
    const navigate = useNavigate();
    const [info, setInfo] = useState();

    const load = async () => {
        const data = await getCatById(id);
        if(data.status === 500 || data.status === 404) return setLoaded(null);
        if(data.status === 200) {
            setCat(data.payload);
            setLoaded(true);
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        if(FormData === cat.name) {
            const result = await deleteCat(id);
            if(result.status === 200){
                redirect(id);
            } else {
                setInfo(result.msg);
            }
        } else {
            setInfo("Wrong cat name");
        }
    }

    const handleChange = (e) => {
        setFormData(e.target.value);
    }

    const redirect = (id) => {
        return navigate(`/deletedcat/${id}`);
    }



    useEffect(() => {
        load();
    }, []);

    if (loaded === null) {
        return (
            <>
            <p>Cat not found</p>
            </>
        )
    }

    if (!loaded) {
        return (
            <>
                <p>Loading cat...</p>
            </>
        )
    }

    return(
        <>
        <h1>Cat view form</h1>
        <p>Cat id: {id}</p>
        <p>Cat name: {cat.name}</p>
        <p>Cat legs: {cat.legs}</p>
        <p>Cat color: {cat.color}</p>
        <form>
            <p>
                Napište jméno kočky pro smazání kočky
            </p>
            <input type="text" placeholder={cat.name} onChange={handleChange} />
            <button className="button is-light" onClick={handleDelete}>Smazat kočku</button>
            <p>
                {info}
            </p>
        </form>
        <Link to={`/updatecat/${id}`}>
        <p>Update Cat</p>
        </Link>
        <Link to={"/"}>
            <p>Go back</p>
        </Link>
        </>
    )
}