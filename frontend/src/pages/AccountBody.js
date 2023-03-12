import {Link} from "react-router-dom"
const AccountBody=()=>{
    return (
        <Link to="/account/createquiz"><div className="account-body">
                <div className="blank">
                </div>
                <div className="blank-bottom">
                    <h3>Blank</h3>
                    <h4>Create new quiz</h4>
                </div>
            </div>
        </Link>
    )
}
export default AccountBody;