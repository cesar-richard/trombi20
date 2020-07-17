import React from "react";
import { Menu } from "semantic-ui-react";
export default function MainMenu() {
  const [activeItem, setActiveItem] = React.useState("home");
  const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <Menu stackable>
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
    </Menu>
  );
}
