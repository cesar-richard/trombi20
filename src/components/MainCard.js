import React from "react";
import PropTypes from "prop-types";
import { Card, Icon, Image } from "semantic-ui-react";

export default function MainCard({
  mail,
  firstname,
  lastname,
  photoLinked,
  nickname,
  devise,
  hometype
}) {
  return (
    <Card>
      <div style={{ width: "auto", height: "300px" }}>
        <Image
          src={`/img/${photoLinked}`}
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          rounded
          centered
          verticalAlign="middle"
          ui
        />
      </div>
      <Card.Content>
        <Card.Header>{`${firstname} ${lastname}`}</Card.Header>
        <Card.Meta>
          <span className="date">{nickname}</span>
        </Card.Meta>
        <Card.Description>{devise}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a alt="Home type" href="#/">
          <Icon name="home" />
          {hometype}
        </a>
      </Card.Content>
    </Card>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired
};
