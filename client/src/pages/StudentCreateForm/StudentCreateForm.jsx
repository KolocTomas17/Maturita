import { Link, redirect, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createStudent } from "../../models/Student";
import "./StudentCreateForm.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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


    return (
        //zmenit obsah u maturity
        <>
            <div className="container">
                <div className="title-container">
                    <h1 className="title is-1">Student create form</h1>
                </div>
                <div className="student-create-form">
                    <form className="form">

                    <input className="input is-rounded" type="text" required name="name" placeholder="Enter name" onChange={e => handleChange(e)} />
                    <input className="input is-rounded" type="text" required name="lastname" placeholder="Enter lastname" onChange={e => handleChange(e)} />
                    <input className="input is-rounded" type="number" required name="age" placeholder="Enter age" onChange={e => handleChange(e)} />
                    <input className="input is-rounded" type="text" required name="color" placeholder="Enter color" onChange={e => handleChange(e)} />
                        <div className="form-controls">

                            <Link to={"/"}>
                                <FontAwesomeIcon className="icon" icon={faArrowLeft} />
                            </Link>
                            <button className="button is-light" onClick={handlePost}>
                                Create student
                            </button>
                        </div>
                    </form>
                    <p>{info}</p>


                </div>
            </div>

        </>

       
    )
}