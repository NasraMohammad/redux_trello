import React from "react";
import Icon from "@material-ui/core/Icon";
class LCRenderButton extends React.Component {
  render() {
    const { list, trueStatus } = this.props;

    const buttonText = list ? "Add a list" : "Add a card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

    const listCardStyles = {
      addButtonContainer: {
        opacity: buttonTextOpacity,
        color: buttonTextColor,
        backgroundColor: buttonTextBackground
      }
    };

    return (
      <div
        style={listCardStyles.addButtonContainer}
        className="addButtonContainer"
        onClick={trueStatus}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  }
}

export default LCRenderButton;
