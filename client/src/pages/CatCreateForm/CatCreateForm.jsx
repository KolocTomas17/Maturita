import { Link, redirect, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createCat } from "../../models/Cat";
import './CatCreateForm.css';

export default function CatCreateForm() {
    //useState - vytvoreni promenne v reactu
    //nazev promenne, setter        useState(default_hodnota)
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

    const postForm = async () => {
        const cat = await createCat(formData);
        if (cat.status === 201) {
            redirectToSuccessPage(cat.payload._id);
        } else {
            setInfo(cat.msg);
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
        return navigate(`/createdcat/${id}`);
    };


    return(
        //zmenit obsah u maturity
        <>


        <h1 className="tittle">Cat create form</h1>
        <div className="cat-create-form">
        <form>
            
            <input className="input is-rounded" type="text" required name="name" placeholder="Enter name" onChange={e => handleChange(e)} />
            <input className="input is-rounded" type="number" required name="legs" placeholder="Enter number of legs" onChange={e => handleChange(e)} />
            <input className="input is-rounded" type="text" required name="color" placeholder="Enter color"  onChange={e => handleChange(e)}/>
            <button className="button is-light" onClick={handlePost}>
                Create cat
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