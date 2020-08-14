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
  const [branchValue, setBranchValue] = React.useState(null);
  const [studiesFromValue, setStudiesFromValue] = React.useState(null);
  const [studiesToValue, setStudiesToValue] = React.useState(null);
  const [clan, setClan] = React.useState(null);
  const [hometype, setHometype] = React.useState(null);

  const handleStudiesFromChange = (e, v) => setStudiesFromValue(v.value);
  const handleStudiesToChange = (e, v) => setStudiesToValue(v.value);
  const handleBranchChange = (e, v) => setBranchValue(v.value);
  const handleClanChange = (e, v) => setClan(v.value);
  const handleHometypeChange = (e, v) => setHometype(v.value);

  return (
    //mail,firstname,lastname,nickname,hobby,drink,devise,photo,studiesfrom,home,studiesto,branch,clan,disguise,hometype,homename
    <Form>
      <Form.Group widths="equal">
        <Form.Input fluid label="Mail" placeholder="licorne@utc.fr" />
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
          checked={studiesFromValue === "Je viens d'avoir le bac"}
          onChange={handleStudiesFromChange}
        />
        <Form.Radio
          label="J'ai un bac + 2/3 (DUT, License ou whatever)"
          value="J'ai un bac + 2/3 (DUT, License ou whatever)"
          checked={
            studiesFromValue === "J'ai un bac + 2/3 (DUT, License ou whatever)"
          }
          onChange={handleStudiesFromChange}
        />
        <Form.Radio
          label="Je me réoriente (Ouai en fait la vie à Compy me faisait de l'oeil tmtc)"
          value="Je me réoriente (Ouai en fait la vie à Compy me faisait de l'oeil tmtc)"
          checked={
            studiesFromValue ===
            "Je me réoriente (Ouai en fait la vie à Compy me faisait de l'oeil tmtc)"
          }
          onChange={handleStudiesFromChange}
        />
        <Form.Radio
          label="Autre ?"
          value="autre"
          checked={studiesFromValue === "autre"}
          onChange={handleStudiesFromChange}
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
          checked={studiesToValue === "TC"}
          onChange={handleStudiesToChange}
        />
        <Form.Radio
          label="Hutech"
          value="Hutech"
          checked={studiesToValue === "Hutech"}
          onChange={handleStudiesToChange}
        />
        <Form.Radio
          label="Branche"
          value="Branche"
          checked={studiesToValue === "Branche"}
          onChange={handleStudiesToChange}
        />
        <Form.Radio
          label="Master"
          value="Master"
          checked={studiesToValue === "Master"}
          onChange={handleStudiesToChange}
        />
        <Form.Radio
          label="Doctorat"
          value="Doctorat"
          checked={studiesToValue === "Doctorat"}
          onChange={handleStudiesToChange}
        />
        <Form.Radio
          label="Autre ?"
          value="autre"
          checked={studiesToValue === "autre"}
          onChange={handleStudiesToChange}
        />
        <Form.Input placeholder="srx ?" />
      </Form.Group>

      <Form.Group inline>
        <label>Tu sais quelle branche tu vise ?</label>
        <Form.Radio
          label="GI"
          value="GI"
          checked={branchValue === "GI"}
          onChange={handleBranchChange}
        />
        <Form.Radio
          label="GÜ"
          value="GÜ"
          checked={branchValue === "GÜ"}
          onChange={handleBranchChange}
        />
        <Form.Radio
          label="IM"
          value="IM"
          checked={branchValue === "IM"}
          onChange={handleBranchChange}
        />
        <Form.Radio
          label="GB"
          value="GB"
          checked={branchValue === "GB"}
          onChange={handleBranchChange}
        />
        <Form.Radio
          label="GP"
          value="GP"
          checked={branchValue === "GP"}
          onChange={handleBranchChange}
        />
        <Form.Radio
          label="Nope frêre on verra ^^"
          value="Nope frêre on verra ^^"
          checked={branchValue === "Nope frêre on verra ^^"}
          onChange={handleBranchChange}
        />
      </Form.Group>

      <Form.Group inline>
        <label>Et le CLAN ? C'est important le clan !</label>
        <Form.Radio
          label="Klarfbinn"
          value="Klarfbinn"
          checked={clan === "Klarfbinn"}
          onChange={handleClanChange}
        />
        <Form.Radio
          label="Tampilaguul"
          value="Tampilaguul"
          checked={clan === "Tampilaguul"}
          onChange={handleClanChange}
        />
        <Form.Radio
          label="Varelbor"
          value="Varelbor"
          checked={clan === "Varelbor"}
          onChange={handleClanChange}
        />
        <Form.Radio
          label="Youarille"
          value="Youarille"
          checked={clan === "Youarille"}
          onChange={handleClanChange}
        />
        <Form.Radio
          label="J'ai dit JSP frr ^^"
          value="J'ai dit JSP frr ^^"
          checked={clan === "J'ai dit JSP frr ^^"}
          onChange={handleClanChange}
        />
      </Form.Group>
      <Form.Input fluid label="T'as eu quoi comme déguisement ?" />
      <Form.Group inline>
        <label>Ton type de logement</label>
        <Form.Radio
          label="Appart/Studio/Chambre ( bref , seul(e) )"
          value="Appart/Studio/Chambre ( bref , seul(e) )"
          checked={hometype === "Appart/Studio/Chambre ( bref , seul(e) )"}
          onChange={handleHometypeChange}
        />
        <Form.Radio
          label="Résidence"
          value="Résidence"
          checked={hometype === "Résidence"}
          onChange={handleHometypeChange}
        />
        <Form.Radio
          label="Coloc"
          value="Coloc"
          checked={hometype === "Coloc"}
          onChange={handleHometypeChange}
        />
        <Form.Radio
          label="Autre ?"
          value="autre"
          checked={hometype === "autre"}
          onChange={handleHometypeChange}
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
