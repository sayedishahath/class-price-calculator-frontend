import { NavItem } from "reactstrap";
import { useNavigate,Link } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { useAuth } from "./context/AuthContext";
export default function NavBar(){
    const navigate = useNavigate();
    const {user,handleLogout} = useAuth()
    return(
        <>
            <nav class="navbar fixed-top bg-body-tertiary">
                <div class="container-fluid">
                    <Link to='/calculator-main'> <img src='./edize-logo.jpg' className="w-23 h-10"/></Link>
                    <p>Class price calculator</p>
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
                    </button>
                </div>
            </nav>
        </>
    )
}