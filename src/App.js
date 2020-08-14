import React from "react";
import { Container } from "semantic-ui-react";
import MainMenu from "./components/MainMenu";
import DataForm from "./components/DataForm";
import Trombinoscope from "./components/Trombinoscope";
import "./App.css";

function App() {
  const [activePage, setActivePage] = React.useState("form");
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <>
      <Container>
        <MainMenu
          searchCallback={setSearchValue}
          menuClickCallback={setActivePage}
        />
        {activePage === "home" && <Trombinoscope searchValue={searchValue} />}
        {activePage === "form" && <DataForm />}
      </Container>
    </>
  );
}

export default App;
