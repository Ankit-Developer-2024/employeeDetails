import { Navigate } from "react-router-dom";


export default function Protected({children}) {
        
     
        let isLogin=localStorage.getItem("isLogin")
        
       
        if (!isLogin) {
              return <Navigate to="/login" replace={true}></Navigate>;
        }else{
            return children    
        }
      
    
}