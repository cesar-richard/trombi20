import React from "react";
import PropTypes from "prop-types";
import { Form } from "semantic-ui-react";
import FileUpload from "./upload/fileUpload";

export default function DataForm() {
  const options = {};
  const [value, setValue] = React.useState("");
  const handleChange = () => {};
  return (
    <>
      <Form>
        <Form.Group widths="equal">
          <Form.Input fluid label="First name" placeholder="First name" />
          <Form.Input fluid label="Last name" placeholder="Last name" />
          <Form.Select
            fluid
            label="Gender"
            options={options}
            placeholder="Gender"
          />
        </Form.Group>

        <FileUpload />
        <Form.Group inline>
          <label>Size</label>
          <Form.Radio
            label="Small"
            value="sm"
            checked={value === "sm"}
            onChange={handleChange}
          />
          <Form.Radio
            label="Medium"
            value="md"
            checked={value === "md"}
            onChange={handleChange}
          />
          <Form.Radio
            label="Large"
            value="lg"
            checked={value === "lg"}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.TextArea label="About" placeholder="Tell us more about you..." />
        <Form.Checkbox label="I agree to the Terms and Conditions" />
        <Form.Button>Submit</Form.Button>
      </Form>
    </>
  );
}

DataForm.propTypes = {};

DataForm.defaultProps = {};
