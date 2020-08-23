import React from "react";
import { Container } from "semantic-ui-react";
import MainMenu from "./components/MainMenu";
import DataForm from "./components/DataForm";
import Trombinoscope from "./components/Trombinoscope";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <>
      <Container>
        <Router>
          <Switch>
            <Route path="/" exact>
              <MainMenu searchCallback={setSearchValue} />
              <Trombinoscope searchValue={searchValue} />
            </Route>
            <Route path="/new" exact>
              <MainMenu searchCallback={setSearchValue} />
              <DataForm />
            </Route>
            <Route path="/login" exact>
              <Login
                casUrl="https://cas.utc.fr/cas"
                service="https://assos.utc.fr/bestyear/47/"
              />
            </Route>
            <Route path="/logout" exact>
              <Logout />
            </Route>
          </Switch>
        </Router>
      </Container>
    </>
  );
}

export default App;
