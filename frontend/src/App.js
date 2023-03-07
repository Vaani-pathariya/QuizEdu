import {Route,Routes} from "react-router-dom";
import Account from "./pages/Account";
import "./app.css"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/account" element={<Account/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
