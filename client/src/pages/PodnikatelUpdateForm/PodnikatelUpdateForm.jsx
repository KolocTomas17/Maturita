import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updatePodnikatel, getPodnikatelById } from "../../models/Podnikatel";
import './PodnikatelUpdateForm.css';

export default function PodnikatelUpdateForm() {
    //useState - vytvoreni promenne v reactu
    //nazev promenne, setter        useState(default_hodnota)
    const { id } = useParams();
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const [loaded, setLoaded] = useState();
    const [podnikatel, setPodnikatel] = useState();
    const navigate = useNavigate();

    const load = async () => {
        const data = await getPodnikatelById(id);
        if (data.status === 500 || data.status === 404) return setLoaded(null);
        if (data.status === 200) {
            setPodnikatel(data.payload);
            setLoaded(true);
        }
    }


    const postForm = async () => {
        const podnikatel = await updatePodnikatel(id, formData);
        if (podnikatel.status === 200) {
            redirectToSuccessPage(podnikatel.payload._id);
        } else {
            setInfo(podnikatel.msg);
        }
    };
    //handle - interakce s html
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handlePost = (e) => {
        e.preventDefault();
        postForm();
    };
    const redirectToSuccessPage = (id) => {
        return navigate(`/podnikatel/${id}`);
    };

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

    return (
        //zmenit obsah u maturity
        <>
            <h1 className="tittle">Podnikatel update form</h1>
            <div className="podnikatel-update-form">
            <form>

                <input className="input is-rounded" type="text" required name="name" placeholder="Enter name" defaultValue={podnikatel.name} onChange={(e) => handleChange(e)} />
                <input className="input is-rounded" type="number" required name="age" placeholder="Enter age" defaultValue={podnikatel.age} onChange={(e) => handleChange(e)} />
                <input className="input is-rounded" type="text" required name="company_name" placeholder="Enter company name" defaultValue={podnikatel.company_name} onChange={(e) => handleChange(e)} />
                <input className="input is-rounded" type="number" required name="money" placeholder="Enter money" defaultValue={podnikatel.money} onChange={(e) => handleChange(e)} />
                <button className="button is-light" onClick={handlePost}>
                    Update podnikatel
                </button>
            </form>
            <p>{info}</p>

            <Link to={"/"}>
                <p>Go back</p>
            </Link>
            </div>
        </>
    )
}