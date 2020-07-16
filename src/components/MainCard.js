import React from "react";
import PropTypes from "prop-types";
import { Card, Icon, Image } from "semantic-ui-react";
import datas from "../datadump";

export default function MainCard({ name }) {
  return datas.map(d => (
    <Card>
      <Image src={`/img/${d.photoLinked}`} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{`${d.firstname} ${d.lastname}`}</Card.Header>
        <Card.Meta>
          <span className="date">{d.nickname}</span>
        </Card.Meta>
        <Card.Description>{d.devise}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a alt="Home type">
          <Icon name="home" />
          Coloc
        </a>
      </Card.Content>
    </Card>
  ));
}

Card.propTypes = {
  name: PropTypes.string.isRequired
};
