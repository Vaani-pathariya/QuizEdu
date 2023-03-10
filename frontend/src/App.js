

import {Route,Routes} from "react-router-dom";
import Account from "./pages/Account";
import "./app.css"
import CreateQuiz from "./pages/CreateQuiz";
import AccountBody from "./pages/AccountBody";
import Questions from "./pages/Questions";
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Login/>}></Route>
        <Route path="/account" element={<Account/>}>
          <Route exact path="" element={<AccountBody/>}></Route>
          <Route path="createquiz" element={<CreateQuiz/>}></Route>
          <Route path="questions" element={<Questions/>}></Route>
        </Route>
      </Routes>

    </div>
  );
}
export default App;
