import "./account.css"
import logo from "../logo.jpg" 
import sample from "../sample.jpeg"
import { Outlet } from "react-router-dom"
const Account=()=>{
    return(
        <div className="account">
            <nav className="navbar">
                < img src={logo} className="nav-logo"></img>
                <input type="text" placeholder="Search" className="search"></input>
                <div className="circle"><img src={sample}></img></div>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}
export default Account;