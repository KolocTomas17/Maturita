import { Link, useParams, useNavigate } from "react-router-dom";
import { getCarById, deleteCar } from "../../models/Car";
import { useEffect, useState } from "react";

export default function CarView() {
    const { id } = useParams();
    const [car, setCar] = useState();
    const [loaded, setLoaded] = useState();
    const [FormData, setFormData] = useState();
    const navigate = useNavigate();
    const [info, setInfo] = useState();

    const load = async () => {
        const data = await getCarById(id);
        if(data.status === 500 || data.status === 404) return setLoaded(null);
        if(data.status === 200) {
            setCar(data.payload);
            setLoaded(true);
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        if(FormData === car.name) {
            const result = await deleteCar(id);
            if(result.status === 200){
                redirect(id);
            } else {
                setInfo(result.msg);
            }
        } else {
            setInfo("Wrong car name");
        }
    }

    const handleChange = (e) => {
        setFormData(e.target.value);
    }

    const redirect = (id) => {
        return navigate(`/deletedcar/${id}`);
    }



    useEffect(() => {
        load();
    }, []);

    if (loaded === null) {
        return (
            <>
            <p>Car not found</p>
            </>
        )
    }

    if (!loaded) {
        return (
            <>
                <p>Loading car...</p>
            </>
        )
    }

    return(
        <>
        <h1>Car view form</h1>
        <p>Car id: {id}</p>
        <p>Car name: {car.name}</p>
        <p>Car color: {car.color}</p>
        <p>Car type: {car.type}</p>
        <p>Car horse power: {car.hp}</p>
        <p>Car price: {car.price} KČ</p>
        <form>
            <p>
                Napište jméno auta pro smazání auta
            </p>
            <input type="text" placeholder={car.name} onChange={handleChange} />
            <button className="button is-light" onClick={handleDelete}>Smazat auto</button>
            <p>
                {info}
            </p>
        </form>
        <Link to={`/updatecar/${id}`}>
        <p>Update Car</p>
        </Link>
        <Link to={"/"}>
            <p>Go back</p>
        </Link>
        </>
    )
}