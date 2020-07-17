import React from "react";
import PropTypes from "prop-types";
import { Feed } from "semantic-ui-react";

export default function MetaInfo({ content, icon, alt, styleFunc }) {
  return content ? (
    <Feed.Event style={styleFunc(content)}>
      <Feed.Label
        icon={icon}
        style={{ alignSelf: "center", ...styleFunc(content) }}
      />
      <Feed.Content>
        <Feed.Summary>{alt}</Feed.Summary>
        <Feed.Extra style={styleFunc(content)}>{content}</Feed.Extra>
      </Feed.Content>
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
