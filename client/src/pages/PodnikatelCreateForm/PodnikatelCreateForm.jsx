import { Link, redirect, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPodnikatel } from "../../models/Podnikatel";
import './PodnikatelCreateForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


export default function PodnikatelCreateForm() {
    //useState - vytvoreni promenne v reactu
    //nazev promenne, setter        useState(default_hodnota)
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

    const postForm = async () => {
        const podnikatel = await createPodnikatel(formData);
        if (podnikatel.status === 201) {
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
        return navigate(`/createdpodnikatel/${id}`);
    };


    return (
        //zmenit obsah u maturity
        <>

            <div className="container">
                <div className="title-container">
                    <h1 className="title is-1">Podnikatel create form</h1>
                </div>
                <div className="podnikatel-create-form">
                    <form className="form">

                        <input className="input is-rounded" type="text" required name="name" placeholder="Enter name" onChange={e => handleChange(e)} />
                        <input className="input is-rounded" type="number" required name="age" placeholder="Enter age" onChange={e => handleChange(e)} />
                        <input className="input is-rounded" type="text" required name="company_name" placeholder="Enter company name" onChange={e => handleChange(e)} />
                        <input className="input is-rounded" type="number" required name="money" placeholder="Enter money" onChange={e => handleChange(e)} />
                        <div className="form-controls">

                            <Link to={"/"}>
                                <FontAwesomeIcon size="2x" color="black" icon={faArrowLeft} />
                            </Link>
                            <button className="button is-light" onClick={handlePost}>
                                Create Podnikatel
                            </button>
                        </div>
                    </form>
                    <p>{info}</p>


                </div>
            </div>

        </>
    )
}