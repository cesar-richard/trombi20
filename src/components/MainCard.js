import React from "react";
import PropTypes from "prop-types";
import { Card, Icon, Image } from "semantic-ui-react";

export default function MainCard({
  firstname,
  lastname,
  photoLinked,
  nickname,
  devise,
  hometype
}) {
  return (
    <Card>
      <Image src={`/img/${photoLinked}`} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{`${firstname} ${lastname}`}</Card.Header>
        <Card.Meta>
          <span className="date">{nickname}</span>
        </Card.Meta>
        <Card.Description>{devise}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a alt="Home type">
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
