import React from "react";
import PropTypes from "prop-types";
import { Card, Feed, Image } from "semantic-ui-react";
import MetaInfo from "./MetaInfo";

export default function MainCard({
  mail,
  firstname,
  lastname,
  photoLinked,
  nickname,
  devise,
  hometype,
  drink,
  studiesfrom,
  studiesto,
  branch,
  clan,
  disguise,
  homename,
  home,
  oldFag
}) {
  return (
    <Card
      centered
      color={oldFag ? "purple" : false}
      style={oldFag ? { backgroundColor: "lightgrey" } : {}}
    >
      <Card.Header
        style={{
          width: "auto",
          height: "300px",
          alignItems: "center",
          alignContent: "center",
          alignSelf: "center",
          verticalAlign: "middle"
        }}
      >
        <Image
          src={`${process.env.PUBLIC_URL}/img/${
            photoLinked ? photoLinked : "Dorade.png"
          }`}
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          rounded
          centered
          verticalAlign="middle"
          ui
        />
      </Card.Header>
      <Card.Content>
        <Card.Header>{`${firstname} ${lastname}${
          oldFag ? " (VIEUX DEBRIS)" : ""
        }`}</Card.Header>
        {nickname ? (
          <Card.Content>
            <span className="date">A.K.A. {nickname}</span>
          </Card.Content>
        ) : null}
        <Feed>
          <MetaInfo
            alt="Type de logement"
            icon="home"
            content={`${
              hometype === "Appart/Studio/Chambre ( bref , seul(e) )"
                ? "Solo"
                : hometype
            }${
              homename &&
              !(
                homename === "nop" ||
                homename === "nope" ||
                homename === "Nope" ||
                homename === "Non." ||
                homename === "Non"
              )
                ? ` (${homename})`
                : ""
            }`}
          />
          <MetaInfo alt="Devise" icon="comment" content={devise} />
          <MetaInfo alt="Boisson préférée" icon="cocktail" content={drink} />
          <MetaInfo
            alt="Etudes précédentes"
            icon="graduation"
            content={studiesfrom}
          />
          <MetaInfo
            alt="Niveau d'entrée à l'UTC"
            icon="pencil"
            content={studiesto}
          />
          <MetaInfo alt="Branche visée" icon="space shuttle" content={branch} />
          <MetaInfo
            alt="Clan"
            icon="group"
            content={clan}
            styleFunc={clan => {
              switch (clan) {
                case "KB":
                  return { color: "red", fontWeight: "bold" };
                case "VB":
                  return { color: "green", fontWeight: "bold" };
                case "You²":
                  return { color: "blue", fontWeight: "bold" };
                case "Tampi":
                  return { color: "orange", fontWeight: "bold" };
                case "Licorne ? (Attention faut assumer)":
                  return { color: "fuchsia", fontWeight: "bold" };
                default:
                  return { fontWeight: "bold" };
              }
            }}
          />
          <MetaInfo alt="Déguisement" icon="detective" content={disguise} />
          <MetaInfo alt="Origine" icon="map pin" content={home} />
        </Feed>
      </Card.Content>
    </Card>
  );
}

MainCard.propTypes = {
  mail: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  photoLinked: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  devise: PropTypes.string.isRequired,
  hometype: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  homename: PropTypes.string.isRequired,
  drink: PropTypes.string.isRequired,
  studiesfrom: PropTypes.string.isRequired,
  studiesto: PropTypes.string.isRequired,
  branch: PropTypes.string.isRequired,
  clan: PropTypes.string.isRequired,
  disguise: PropTypes.string.isRequired
};
