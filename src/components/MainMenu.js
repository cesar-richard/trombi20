import React from "react";
import { Menu, Search } from "semantic-ui-react";
import dataDump from "../datadump";

export default function MainMenu() {
  const [activeItem, setActiveItem] = React.useState("home");
  const handleItemClick = (e, { name }) => setActiveItem(name);
  const [searchValue, setSearchValue] = React.useState("");
  const [results, setResults] = React.useState([]);

  const handleSearchChange = (e, { value }) => {
    setSearchValue(value);
    setResults(
      dataDump
        .filter(x => {
          return `${x.mail} ${x.firstname} ${x.lastname} ${x.nickname} ${x.studiesfrom} ${x.studiesto} ${x.hometype} ${x.homename}`.includes(
            value
          );
        })
        .map(x => {
          return {
            title: `${x.firstname} ${x.lastname}`,
            description: x.nickname,
            image: `${process.env.PUBLIC_URL}/img/${
              x.photoLinked ? x.photoLinked : "Dorade.png"
            }`
          };
        })
    );
  };

  return (
    <Menu attached="top" stackable>
      <Menu.Item>
        <img alt="Trombi" src={`${process.env.PUBLIC_URL}/favicon.png`} />
      </Menu.Item>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
      >
        Trombinoscope
      </Menu.Item>
      <Menu.Item
        name="form"
        active={activeItem === "form"}
        link
        href="https://forms.gle/TReCpKNaa1e54MNc9"
        target="_blank"
      >
        Remplir le formulaire
      </Menu.Item>
      <Menu.Menu position="right">
        <Search
          fluid
          onResultSelect={(e, { result }) => setSearchValue(`${result.title}`)}
          onSearchChange={handleSearchChange}
          results={results}
          value={searchValue}
        />
      </Menu.Menu>
    </Menu>
  );
}
