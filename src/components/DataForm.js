import React from "react";
import { Form } from "semantic-ui-react";
import FileUpload from "./upload/fileUpload";

export default function DataForm() {
  const options = [
    "Aubergine",
    "Pêche",
    "volontier !",
    "sans (contre?)facons."
  ];
  const [formState, setFormState] = React.useState({
    mail: "",
    firstname: "",
    lastname: "",
    nickname: "",
    hobby: "",
    drink: "",
    devise: "",
    photo: "",
    studiesfrom: "",
    home: "",
    studiesto: "",
    branch: "",
    clan: "",
    disguise: "",
    hometype: "",
    homename: ""
  });

  const handleChange = (e, { name, value }) => {
    setFormState({ [name]: value }, ...formState);
  };

  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="Mail"
          placeholder="licorne@utc.fr"
          onChange={handleChange}
        />
        <Form.Input fluid label="Prénom" placeholder="First name" />
        <Form.Input fluid label="Nom" placeholder="Last name" />
        <Form.Input fluid label="Un surnom ?" placeholder="Surnom" />
      </Form.Group>
      <Form.Select
        fluid
        label="Gender"
        options={options}
        placeholder="Gender"
      />
      <Form.Group widths="equal">
        <Form.Input fluid label="Une passion" placeholder="Fais nous rêver !" />
        <Form.Input fluid label="Ta boisson préférée" />
      </Form.Group>
      <FileUpload />
      <Form.Group inline>
        <label>Les études</label>
        <Form.Radio
          label="Je viens d'avoir le bac"
          value="Je viens d'avoir le bac"
          checked={formState["studiesFrom"] === "Je viens d'avoir le bac"}
          onChange={handleChange}
        />
        <Form.Radio
          label="J'ai un bac + 2/3 (DUT, License ou whatever)"
          value="J'ai un bac + 2/3 (DUT, License ou whatever)"
          checked={
            formState["studiesFrom"] ===
            "J'ai un bac + 2/3 (DUT, License ou whatever)"
          }
          onChange={handleChange}
        />
        <Form.Radio
          label="Je me réoriente (Ouai en fait la vie à Compy me faisait de l'oeil tmtc)"
          value="Je me réoriente (Ouai en fait la vie à Compy me faisait de l'oeil tmtc)"
          checked={
            formState["studiesFrom"] ===
            "Je me réoriente (Ouai en fait la vie à Compy me faisait de l'oeil tmtc)"
          }
          onChange={handleChange}
        />
        <Form.Radio
          label="Autre ?"
          value="autre"
          checked={formState["studiesFrom"] === "autre"}
          onChange={handleChange}
        />
        <Form.TextArea placeholder="Bah ouai raconte ! :)" />
      </Form.Group>
      <Form.Input
        fluid
        label="La maison"
        placeholder="Tu viens de quel coin ?"
      />

      <Form.Group inline>
        <label>Tu rentres en :</label>
        <Form.Radio
          label="TC"
          value="TC"
          checked={formState["studiesTo"] === "TC"}
          onChange={handleChange}
        />
        <Form.Radio
          label="Hutech"
          value="Hutech"
          checked={formState["studiesTo"] === "Hutech"}
          onChange={handleChange}
        />
        <Form.Radio
          label="Branche"
          value="Branche"
          checked={formState["studiesTo"] === "Branche"}
          onChange={handleChange}
        />
        <Form.Radio
          label="Master"
          value="Master"
          checked={formState["studiesTo"] === "Master"}
          onChange={handleChange}
        />
        <Form.Radio
          label="Doctorat"
          value="Doctorat"
          checked={formState["studiesTo"] === "Doctorat"}
          onChange={handleChange}
        />
        <Form.Radio
          label="Autre ?"
          value="autre"
          checked={formState["studiesTo"] === "autre"}
          onChange={handleChange}
        />
        <Form.Input placeholder="srx ?" />
      </Form.Group>

      <Form.Group inline>
        <label>Tu sais quelle branche tu vise ?</label>
        <Form.Radio
          label="GI"
          value="GI"
          checked={formState["branch"] === "GI"}
          onChange={handleChange}
        />
        <Form.Radio
          label="GÜ"
          value="GÜ"
          checked={formState["branch"] === "GÜ"}
          onChange={handleChange}
        />
        <Form.Radio
          label="IM"
          value="IM"
          checked={formState["branch"] === "IM"}
          onChange={handleChange}
        />
        <Form.Radio
          label="GB"
          value="GB"
          checked={formState["branch"] === "GB"}
          onChange={handleChange}
        />
        <Form.Radio
          label="GP"
          value="GP"
          checked={formState["branch"] === "GP"}
          onChange={handleChange}
        />
        <Form.Radio
          label="Nope frêre on verra ^^"
          value="Nope frêre on verra ^^"
          checked={formState["branch"] === "Nope frêre on verra ^^"}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group inline>
        <label>Et le CLAN ? C'est important le clan !</label>
        <Form.Radio
          label="Klarfbinn"
          value="Klarfbinn"
          checked={formState["clan"] === "Klarfbinn"}
          onChange={handleChange}
        />
        <Form.Radio
          label="Tampilaguul"
          value="Tampilaguul"
          checked={formState["clan"] === "Tampilaguul"}
          onChange={handleChange}
        />
        <Form.Radio
          label="Varelbor"
          value="Varelbor"
          checked={formState["clan"] === "Varelbor"}
          onChange={handleChange}
        />
        <Form.Radio
          label="Youarille"
          value="Youarille"
          checked={formState["clan"] === "Youarille"}
          onChange={handleChange}
        />
        <Form.Radio
          label="J'ai dit JSP frr ^^"
          value="J'ai dit JSP frr ^^"
          checked={formState["clan"] === "J'ai dit JSP frr ^^"}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Input fluid label="T'as eu quoi comme déguisement ?" />
      <Form.Group inline>
        <label>Ton type de logement</label>
        <Form.Radio
          label="Appart/Studio/Chambre ( bref , seul(e) )"
          value="Appart/Studio/Chambre ( bref , seul(e) )"
          checked={
            formState["hometype"] === "Appart/Studio/Chambre ( bref , seul(e) )"
          }
          onChange={handleChange}
        />
        <Form.Radio
          label="Résidence"
          value="Résidence"
          checked={formState["hometype"] === "Résidence"}
          onChange={handleChange}
        />
        <Form.Radio
          label="Coloc"
          value="Coloc"
          checked={formState["hometype"] === "Coloc"}
          onChange={handleChange}
        />
        <Form.Radio
          label="Autre ?"
          value="autre"
          checked={formState["hometype"] === "autre"}
          onChange={handleChange}
        />
        <Form.Input placeholder="T'habites où du coup ?" />
      </Form.Group>
      <Form.Input
        fluid
        label="Ton appart / coloc / residence ou whatever a un nom ?"
        placeholder="Faut en trouver un si non !"
      />
      <Form.Button>Valider</Form.Button>
    </Form>
  );
}

DataForm.propTypes = {};

DataForm.defaultProps = {};
