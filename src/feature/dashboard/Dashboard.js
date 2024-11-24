import Button from "../../common/common";
import ListOfEmployee from "../../common/ListOfEmployee";
import "./dashboard.css"
import { Link } from "react-router-dom";

export default function Dashboard() {
    
    let userName=localStorage.getItem("userName");

    function handleCreate() {
        
    }

    return (
        <>
      <div>
      <div className="dashboard">
            <p className=" dashboardInfo">Hi, <strong>{userName}</strong> here you can see your Employee list , Create New Employee Id and also edit existing Employee details.</p>
               
            <ListOfEmployee></ListOfEmployee>
         
         </div>
      </div>
        </>
    )

}