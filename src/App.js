import Rootpage from "./components/container/rootPage/Rootpage";
import "bootstrap/dist/css/bootstrap.css";
// import "./assets/css/sb-admin-2.min.css";
import "./assets/css/sb-admin-2.css";
import "./assets/css/style.css";
import { Switch, Route } from "react-router-dom";
import Login from "./components/authentication/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/main">
          <Rootpage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
