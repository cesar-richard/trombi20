import React from "react";
import PropTypes from "prop-types";
import { CardGroup } from "semantic-ui-react";
import MainCard from "./MainCard";
import datas from "./../datadump";

export default function Trombinoscope({ value }) {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <CardGroup stackable>
      {datas
        .filter(x => {
          return `${x.clan} ${x.branch} ${x.mail} ${x.firstname} ${x.lastname} ${x.nickname} ${x.studiesfrom} ${x.studiesto} ${x.hometype} ${x.homename}`.includes(
            searchValue
          );
        })
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
            oldFag={d.oldFag}
          />
        ))}
    </CardGroup>
  );
}

Trombinoscope.propTypes = {};

Trombinoscope.defaultProps = {};
