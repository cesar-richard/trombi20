import React from "react";
import { Container, CardGroup } from "semantic-ui-react";
import MainCard from "./components/MainCard";
import MainMenu from "./components/MainMenu";
import "./App.css";
import datas from "./datadump";

function App() {
  return (
    <>
      <Container>
        <MainMenu />
        <CardGroup stackable>
          {datas
            .sort((a, b) => {
              if (a.firstname < b.firstname) {
                return -1;
              }
              if (a.firstname > b.firstname) {
                return 1;
              }
              return 0;
            })
            .map(d => (
              <MainCard
                key={d.mail}
                mail={d.mail}
                firstname={d.firstname}
                lastname={d.lastname}
                nickname={d.nickname}
                photoLinked={d.photoLinked}
                hometype={d.hometype}
                homename={d.homename}
                devise={d.devise}
                drink={d.drink}
                studiesfrom={d.studiesfrom}
                studiesto={d.studiesto}
                branch={d.branch}
                clan={d.clan}
                disguise={d.disguise}
                home={d.home}
              />
            ))}
        </CardGroup>
      </Container>
    </>
  );
}

export default App;
