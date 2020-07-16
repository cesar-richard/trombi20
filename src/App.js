import React from "react";
import { Container, CardGroup, Grid } from "semantic-ui-react";
import MainCard from "./components/MainCard";
import "./App.css";
import datas from "./datadump";

function App() {
  return (
    <>
      <Container>
        <CardGroup>
          {datas.map(d => (
            <MainCard
              key={d.mail}
              mail={d.mail}
              firstname={d.firstname}
              lastname={d.lastname}
              nickname={d.nickname}
              photoLinked={d.photoLinked}
              hometype={d.hometype}
              devise={d.devise}
            />
          ))}
        </CardGroup>
      </Container>
    </>
  );
}

export default App;
