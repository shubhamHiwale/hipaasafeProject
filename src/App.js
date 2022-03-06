import React, { useContext, useEffect } from "react";
import Rootpage from "./components/container/rootPage/Rootpage";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/sb-admin-2.css";
import "./assets/css/style.css";
import { Switch, Route, useHistory } from "react-router-dom";
import Login from "./components/authentication/Login";
import appContext from "./context/appcontext/AppContext";
import { Redirect } from 'react-router';


function App() {
  const AppContext = useContext(appContext);
  const histroy = useHistory();

  useEffect(() => {
    if (AppContext.user) redirectUser(AppContext?.user?.role_id);
    else histroy.push("/");
  }, [AppContext.user]);

  const redirectUser = (role) => {
    switch (role) {
      case 4:
        histroy.push("/main/support-dashboard");
        break;

      default:
        histroy.push("/main/dashboard");
        break;
    }
  }

  return (
    <div className="App">
      <Switch>
        {
          AppContext?.user
            ? <>
              <Route path="/main">
                <Rootpage AppContext={AppContext} />
              </Route>
              <Redirect to="/" /></>
            :
            <>
              <Route exact path="/">
                <Login />
              </Route>
              <Redirect to="/" />
            </>
        }
      </Switch>
    </div >
  );
}

export default App;
