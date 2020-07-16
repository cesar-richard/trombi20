import React from "react";
import { Container, CardGroup } from "semantic-ui-react";
import MainCard from "./components/MainCard";
import "./App.css";
import datas from "./datadump";

function App() {
  return datas.map(d => (
    <Container fluid>
      <CardGroup fluid>
        <MainCard
          firstname={d.firstname}
          lastname={d.lastname}
          nickname={d.nickname}
          photoLinked={d.photoLinked}
          hometype={d.hometype}
          devise={d.devise}
        />
      </CardGroup>
    </Container>
  ));
}

export default App;
