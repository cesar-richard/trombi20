import React from "react";
import PropTypes from "prop-types";
import { Feed } from "semantic-ui-react";

export default function MetaInfo({ content, icon, alt, styleFunc }) {
  return content ? (
    <Feed.Event style={styleFunc(content)}>
      <Feed.Label icon={icon} style={{ alignSelf: "center" }} />
      <Feed.Content
        summary={alt}
        extraText={content}
        style={styleFunc(content)}
      />
    </Feed.Event>
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
