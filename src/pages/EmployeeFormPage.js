import EmployeeForm from "../feature/createEditEmployee/EmployeeForm";
import Navbar from "../feature/navbar/Navbar";


export default function EmployeeFormPage() {
    
    return (
        <>
           <Navbar>
            <EmployeeForm></EmployeeForm>
           </Navbar>
        </>
    )

}