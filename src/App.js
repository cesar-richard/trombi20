import React from "react";
import { Container } from "semantic-ui-react";
import MainMenu from "./components/MainMenu";
import DataForm from "./components/DataForm";
import Trombinoscope from "./components/Trombinoscope";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <>
      <Container>
        <MainMenu searchCallback={setSearchValue} />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Trombinoscope searchValue={searchValue} />
            </Route>
            <Route path="/new" exact>
              <DataForm />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
          </Switch>
        </Router>
      </Container>
    </>
  );
}

export default App;
