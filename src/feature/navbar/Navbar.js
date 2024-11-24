import Logo from "../../assets/userLogo.png"
import "./navbar.css"
import Button from "../../common/common"
import { Link, Navigate, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar({children}) {

    let [logOut,setLogOut] =useState(false);
   
    function handleLogout() {
        localStorage.clear();
         setLogOut(true);
    }
    

    return (
        <>
        { logOut && <Navigate to="/login" replace={true}></Navigate>}
        <div className="NavBar ">
            <div className="NavBar NavBarleft">
             <img  className=" logo " src={Logo} alt="Logo"/>
             <span ><NavLink  to="/" className=" NavBarLink ">Home</NavLink></span> 
             <span ><NavLink to="/employee-list"  className=" NavBarLink ">Employee List</NavLink></span>
            </div>
            <div className="NavBar NavBarRight">
                <Button  backgroundColor="red" marginTop="0px" handleClick={handleLogout}>Log out</Button>
            </div>
        </div>
        {children}
        </>
    )

}