import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import CatView from "./CatView/CatView";
import CatList from "./CatList/CatList";
import CatCreateForm from "./CatCreateForm/CatCreateForm";
import CatUpdateForm from "./CatUpdateForm/CatUpdateForm";
import CreatedCat from "./CatCreateForm/CreatedCat";
import CatDeleted from "./CatView/CatDeleted";

import StudentView from "./StudentView/StudentView";
import StudentList from "./StudentList/StudentList";
import StudentCreateForm from "./StudentCreateForm/StudentCreateForm";
import StudentUpdateForm from "./StudentUpdateForm/StudentUpdateForm";
import CreatedStudent from "./StudentCreateForm/CreatedStudent";
import StudentDeleted from "./StudentView/StudentDeleted";

export default function AppRouters() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/cat/:id" element={<CatView />} />
                <Route path="/cats" element={<CatList />} />
                <Route path="/createcat" element={<CatCreateForm />} />
                <Route path="/updatecat/:id" element={<CatUpdateForm />} />
                <Route path="/createdcat/:id" element={<CreatedCat />} />
                <Route path="/deletedcat/:id" element={<CatDeleted />} />

                <Route path="/student/:id" element={<StudentView />} />
                <Route path="/students" element={<StudentList />} />
                <Route path="/createstudent" element={<StudentCreateForm />} />
                <Route path="/updatestudent/:id" element={<StudentUpdateForm />} />
                <Route path="/createdstudent/:id" element={<CreatedStudent />} />
                <Route path="/deletedstudent/:id" element={<StudentDeleted />} />
            </Routes>  
        </BrowserRouter>
    )
    
}