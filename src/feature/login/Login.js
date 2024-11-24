import  "./login.css"
import userLogo from "../../assets/userLogo.png"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Login(){
   
    let [isLogin,setLogin]=useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
     

    return (
        <>
            {isLogin && <Navigate to='/'></Navigate> }
           <div className="Login">
           <div className="Login-Info">   
           <h2 className="Login-heading">Login</h2>
           <img className="Login-logo" src={userLogo} alt="userLogo" loading="lazy"/>
            <form   onSubmit={handleSubmit((data)=>{

                localStorage.setItem("userName",data.userName)
                localStorage.setItem("isLogin",true)
                setLogin(true)
              
               
            })}>
             <label className="Login-userNameLabel" htmlFor="userName" >User Name :</label>
             <input
             {...register("userName",{required:"User name is required"})}
             className="Login-userNameInput" type="text" id="userName" name="userName" placeholder="Enter user name"></input>   
               <br/>
              {errors.userName ? <p className="Login-error">{errors.userName?.message}</p> : <br/>} 
             <label className="Login-passwordLabel" htmlFor="userPassword" >Password :</label>
             <input 
             {...register("userPassword",{required:"Password is required"})}
             className="Login-passwordInput"  type="password" id="userPassword" name="userPassword" placeholder="Enter user name"></input>  
             <br/> 
             {errors.userPassword && <p className="Login-error">{errors.userPassword?.message}</p>} 
             <input className="Login-button" type="submit" />
            </form>
           </div>
           </div>
        </>
    );
}