import { Link, useParams, useNavigate } from "react-router-dom";
import { getPodnikatelById, deletePodnikatel } from "../../models/Podnikatel";
import { useEffect, useState } from "react";

export default function PodnikatelView() {
    const { id } = useParams();
    const [podnikatel, setPodnikatel] = useState();
    const [loaded, setLoaded] = useState();
    const [FormData, setFormData] = useState();
    const navigate = useNavigate();
    const [info, setInfo] = useState();

    const load = async () => {
        const data = await getPodnikatelById(id);
        if(data.status === 500 || data.status === 404) return setLoaded(null);
        if(data.status === 200) {
            setPodnikatel(data.payload);
            setLoaded(true);
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        if(FormData === podnikatel.name) {
            const result = await deletePodnikatel(id);
            if(result.status === 200){
                redirect(id);
            } else {
                setInfo(result.msg);
            }
        } else {
            setInfo("Wrong podnikatel name");
        }
    }

    const handleChange = (e) => {
        setFormData(e.target.value);
    }

    const redirect = (id) => {
        return navigate(`/deletedpodnikatel/${id}`);
    }



    useEffect(() => {
        load();
    }, []);

    if (loaded === null) {
        return (
            <>
            <p>Podnikatel not found</p>
            </>
        )
    }

    if (!loaded) {
        return (
            <>
                <p>Loading podnikatel...</p>
            </>
        )
    }

    return(
        <>
        <h1>Podnikatel view form</h1>
        <p>Podnikatel id: {id}</p>
        <p>Podnikatel name: {podnikatel.name}</p>
        <p>Podnikatel age: {podnikatel.age}</p>
        <p>Podnikatel company_name: {podnikatel.company_name}</p>
        <p>Podnikatel money: {podnikatel.money}</p>
        <form>
            <p>
                Napište jméno podnikatele pro smazání podnikatele
            </p>
            <input type="text" placeholder={podnikatel.name} onChange={handleChange} />
            <button className="button is-light" onClick={handleDelete}>Smazat podnikatele</button>
            <p>
                {info}
            </p>
        </form>
        <Link to={`/updatepodnikatel/${id}`}>
        <p>Update Podnikatel</p>
        </Link>
        <Link to={"/"}>
            <p>Go back</p>
        </Link>
        </>
    )
}