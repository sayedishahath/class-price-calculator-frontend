import { NavItem } from "reactstrap";
import { useNavigate,Link,useLocation } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { useAuth } from "./context/AuthContext";
export default function NavBar(){
    const location = useLocation()
    const navigate = useNavigate();
    const {user,handleLogout} = useAuth()
    return(
        <>
            <nav className="navbar fixed-top bg-body-tertiary">
                <div className="container-fluid">
                    <Link to='/calculator-main'> <img src='./edize-logo.jpg' className="w-23 h-10"/></Link>
                    <p>Class price calculator</p>
                    {location.pathname!=="/register"&&
                    <button onClick={() => {
                        const confirmation = window.confirm("Are you sure to Logout")
                        if(confirmation) {
                            localStorage.removeItem("token")
                            handleLogout()
                            navigate("/")
                            window.location.reload()
                        }
                        }}>
                        log-out
                    </button>}
                </div>
            </nav>
        </>
    )
}