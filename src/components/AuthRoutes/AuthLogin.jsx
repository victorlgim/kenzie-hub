import { Navigate, Outlet} from "react-router-dom";



const AuthLogin = () => {
    const token = localStorage.getItem('token')
  
    return ( 
        <>
         {
            token ? <Navigate to='/dashboard'/> : <Outlet />

         }
         </>
     );
}
 
export default AuthLogin;