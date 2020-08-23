import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import { getServiceTicket, getTicketGrantingTicket } from "../helpers/cas";
import { loginCas } from "../helpers/api";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Progress
} from "semantic-ui-react";
import { Redirect } from "react-router-dom";

export default function Login({ casUrl, service }) {
  const [isLoading, setLoading] = React.useState(false);
  const [processStep, setProcessStep] = React.useState(0);
  const [statusMessage, setStatusMessage] = React.useState("");
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  let history = useHistory();
  if (localStorage.hasOwnProperty("bestyearuser")) {
    return <Redirect to={`/`} />;
  }

  let handleSubmitCas = async () => {
    try {
      setLoading(true);
      setProcessStep(0);
      localStorage.removeItem("bestyearuser");
      let formData = {
        service,
        username: login,
        password
      };

      setStatusMessage("Getting CAS Ticket Granting Ticket ...");
      setProcessStep(1);
      const tgt = await getTicketGrantingTicket(
        casUrl,
        formData.username,
        formData.password,
        formData.service
      );
      setStatusMessage("Getting CAS Service Ticket ...");
      setProcessStep(2);
      const st = await getServiceTicket(casUrl, tgt, formData.service);
      setStatusMessage("Logging into API ...");
      setProcessStep(3);
      const user = await loginCas(service, st);
      setStatusMessage("Creating session ...");
      localStorage.setItem("bestyearuser", JSON.stringify(user));
      history.push(`${process.env.PUBLIC_URL}/`);
    } finally {
      setLoading(false);
      setProcessStep(0);
    }
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src={`${process.env.PUBLIC_URL}/favicon.png`} /> Bestyear 2020
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={(e, d) => setLogin(d.value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={(e, d) => setPassword(d.value)}
            />
          </Segment>
          <Button
            disabled={isLoading}
            loading={isLoading}
            color="teal"
            fluid
            size="large"
            onClick={e => handleSubmitCas()}
          >
            Login
          </Button>
        </Form>
        {isLoading && (
          <Message>
            <Progress
              indicating
              percent={(processStep / 4) * 100}
              label={statusMessage}
            />
          </Message>
        )}
        <Message>
          (Pour les nouvös, c'est le login et le mot de passe UTC)
        </Message>
      </Grid.Column>
    </Grid>
  );
}

Login.propTypes = {
  casUrl: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired
};
