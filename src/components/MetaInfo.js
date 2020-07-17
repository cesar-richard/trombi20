import React from "react";
import PropTypes from "prop-types";
import { CardMeta, Icon } from "semantic-ui-react";

export default function MetaInfo({ content, icon, alt, styleFunc }) {
  return content ? (
    <CardMeta>
      <a alt={alt} href="#/" style={styleFunc(content)}>
        <Icon name={icon} />
        <span style={{ marginLeft: "1rem" }}>{content}</span>
      </a>
    </CardMeta>
  ) : null;
}

MetaInfo.propTypes = {
  alt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  styleFunc: PropTypes.func
};

MetaInfo.defaultProps = {
  styleFunc: () => {}
};
