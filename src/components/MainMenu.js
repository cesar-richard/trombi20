import React from "react";
import { Menu } from "semantic-ui-react";
export default function MainMenu() {
  const [activeItem, setActiveItem] = React.useState("home");
  const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <Menu stackable>
      <Menu.Item>
        <img alt="Trombi" src="/favicon.png" />
      </Menu.Item>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
      >
        Home
      </Menu.Item>
      <Menu.Item
        name="test"
        active={activeItem === "test"}
        onClick={handleItemClick}
      >
        Test
      </Menu.Item>
    </Menu>
  );
}
