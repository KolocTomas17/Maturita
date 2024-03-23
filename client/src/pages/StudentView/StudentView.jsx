import { Link, useParams, useNavigate } from "react-router-dom";
import { getStudentById, deleteStudent } from "../../models/Student";
import { useEffect, useState } from "react";

export default function StudentView() {
    const { id } = useParams();
    const [student, setStudent] = useState();
    const [loaded, setLoaded] = useState();
    const [FormData, setFormData] = useState();
    const navigate = useNavigate();
    const [info, setInfo] = useState();

    const load = async () => {
        const data = await getStudentById(id);
        if(data.status === 500 || data.status === 404) return setLoaded(null);
        if(data.status === 200) {
            setStudent(data.payload);
            setLoaded(true);
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        if(FormData === student.name) {
            const result = await deleteStudent(id);
            if(result.status === 200){
                redirect(id);
            } else {
                setInfo(result.msg);
            }
        } else {
            setInfo("Wrong student name");
        }
    }

    const handleChange = (e) => {
        setFormData(e.target.value);
    }

    const redirect = (id) => {
        return navigate(`/deletedstudent/${id}`);
    }



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
        <>
        <h1>Student view form</h1>
        <p>Student id: {id}</p>
        <p>Student name: {student.name}</p>
        <p>Student lastname: {student.lastname}</p>
        <p>Student age: {student.age}</p>
        <p>Student color: {student.color}</p>
        <form>
            <p>
                Napište jméno studenta pro smazání studenta
            </p>
            <input type="text" placeholder={student.name} onChange={handleChange} />
            <button className="button is-light" onClick={handleDelete}>Smazat studenta</button>
            <p>
                {info}
            </p>
        </form>
        <Link to={`/updatestudent/${id}`}>
        <p>Update Student</p>
        </Link>
        <Link to={"/"}>
            <p>Go back</p>
        </Link>
        </>
    )
}