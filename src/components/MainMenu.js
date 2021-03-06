import React from "react";
import PropTypes from "prop-types";
import { Menu, Search } from "semantic-ui-react";
import dataDump from "../datadump";
import constants from "../constants";

export default function MainMenu({
  searchCallback,
  menuClickCallback,
  hasSearchbar
}) {
  const [searchValue, setSearchValue] = React.useState("");
  const [results, setResults] = React.useState([]);

  const handleSearchChange = (e, { value }) => {
    setSearchValue(value);
    searchCallback(value);
    setResults(
      dataDump
        .filter(x => {
          return `${x.mail}${x.firstname}${x.lastname}${x.nickname}${x.studiesfrom}${x.studiesto}${x.hometype}${x.homename}`.includes(
            value
          );
        })
        .map(x => {
          return {
            title: `${x.firstname} ${x.lastname}`.concat(
              x.nickname ? ` (${x.nickname})` : ""
            ),
            description: x.clan,
            image: `${process.env.PUBLIC_URL}/img/${
              x.photoLinked ? x.photoLinked : "Dorade.png"
            }`
          };
        })
    );
  };

  return (
    <Menu attached="top" stackable style={{ marginBottom: "1em" }}>
      <Menu.Item>
        <img alt="Trombi" src={`${process.env.PUBLIC_URL}/favicon.png`} />
      </Menu.Item>
      <Menu.Item name="home" href="/">
        Trombinoscope
      </Menu.Item>
      {/*<Menu.Item name="form" href="/new">
        Remplir le formulaire WIP
      </Menu.Item>*/}
      <Menu.Item name="form" link href={constants.formUrl} target="_blank">
        Remplir sur gform
      </Menu.Item>
      {/*<Menu.Item>{JSON.parse(localStorage.bestyearuser).displayName}</Menu.Item>*/}
      {hasSearchbar && (
        <Menu.Menu position="right" style={{ alignItems: "center" }}>
          <Search
            fluid
            onResultSelect={(e, { result }) => {
              setSearchValue(result.title);
              searchCallback(result.title);
            }}
            onSearchChange={handleSearchChange}
            results={results}
            value={searchValue}
          />
        </Menu.Menu>
      )}
    </Menu>
  );
}

MainMenu.propTypes = {
  searchCallback: PropTypes.func.isRequired,
  hasSearchbar: PropTypes.bool.isRequired,
  menuClickCallback: PropTypes.func
};

MainMenu.defaultProps = {
  searchCallback: () => {},
  hasSearchbar: false
};
