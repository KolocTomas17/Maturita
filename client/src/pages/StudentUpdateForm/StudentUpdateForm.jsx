import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateStudent, getStudentById } from "../../models/Student";
import "./StudentUpdateForm.css";

export default function StudentUpdateForm() {
    //useState - vytvoreni promenne v reactu
    //nazev promenne, setter        useState(default_hodnota)
    const { id } = useParams();
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const [loaded, setLoaded] = useState();
    const [student, setStudent] = useState();
    const navigate = useNavigate();
    
    const load = async () => {
        const data = await getStudentById(id);
        if(data.status === 500 || data.status === 404) return setLoaded(null);
        if(data.status === 200) {
            setStudent(data.payload);
            setLoaded(true);
        }
    }


    const postForm = async () => {
        const student = await updateStudent(id, formData);
        if (student.status === 200) {
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
        return navigate(`/student/${id}`);
    };

    useEffect(() => {
        load();
    }, []);

    if (loaded === null) {
        return (
            <>
            <p>Student not found</p>
            </>
        )
    }

    if (!loaded) {
        return (
            <>
                <p>Loading student...</p>
            </>
        )
    }

    return(
        //zmenit obsah u maturity
        <>
        <h1 className="tittle">Student update form</h1>
        <div className="student-update-form">
        <form>
            
            <input className="input is-rounded" type="text" required name="name" placeholder="Enter name" defaultValue={student.name} onChange={(e) => handleChange(e)} />
            <input className="input is-rounded" type="text" required name="lastname" placeholder="Enter lastname" defaultValue={student.lastname} onChange={(e) => handleChange(e)} />
            <input className="input is-rounded" type="number" required name="age" placeholder="Enter age" defaultValue={student.age} onChange={(e) => handleChange(e)} />
            <input className="input is-rounded" type="text" required name="color" placeholder="Enter color" defaultValue={student.color}  onChange={(e) => handleChange(e)}/>
            <button className="button is-light" onClick={handlePost}>
                Update student
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