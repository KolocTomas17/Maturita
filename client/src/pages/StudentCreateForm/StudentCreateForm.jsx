import { Link, redirect, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createStudent } from "../../models/Student";
import "./StudentCreateForm.css";

export default function StudentCreateForm() {
    //useState - vytvoreni promenne v reactu
    //nazev promenne, setter        useState(default_hodnota)
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

    const postForm = async () => {
        const student = await createStudent(formData);
        if (student.status === 201) {
            redirectToSuccessPage(student.payload._id);
        } else {
            setInfo(student.msg);
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
        return navigate(`/createdstudent/${id}`);
    };


    return(
        //zmenit obsah u maturity
        <>
        <h1 className="tittle">Student create form</h1>
        <div className="student-create-form">
        <form>
            
            <input className="input is-rounded" type="text" required name="name" placeholder="Enter name" onChange={e => handleChange(e)} />
            <input className="input is-rounded" type="text" required name="lastname" placeholder="Enter lastname" onChange={e => handleChange(e)} />
            <input className="input is-rounded" type="number" required name="age" placeholder="Enter age" onChange={e => handleChange(e)} />
            <input className="input is-rounded" type="text" required name="color" placeholder="Enter color"  onChange={e => handleChange(e)}/>
            <button className="button is-light" onClick={handlePost}>
                Create student
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