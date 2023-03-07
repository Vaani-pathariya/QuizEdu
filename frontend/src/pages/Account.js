import "./account.css"
import logo from "../logo.jpg" 
import sample from "../sample.jpeg"
const Account=()=>{
    return(
        <div className="account">
            <nav className="navbar">
                < img src={logo} className="nav-logo"></img>
                <input type="text" placeholder="Search" className="search"></input>
                <div className="circle"><img src={sample}></img></div>
            </nav>
            <div className="account-body">
                <div className="blank">
                </div>
                <div className="blank-bottom">
                    <h3>Blank</h3>
                    <h4>Create new quiz</h4>
                </div>
            </div>
        </div>
    )
}
export default Account;