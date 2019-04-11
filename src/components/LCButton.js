import React from "react";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";

import { connect } from "react-redux";
import { addList, addCard } from "../actions";
import { allStyles } from "../styles";

class LCButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formStatus: false, title: "", user: "" };
  }

  trueStatus = () => {
    this.setState({ formStatus: true });
  };

  falseStatus = e => {
    this.setState({ formStatus: false });
  };

  addListFunction = () => {
    const { title } = this.state;

    if (title) {
      this.props.addList(title);
      this.setState({ title: "" });
    }

    return;
  };

  addCardFunction = () => {
    const { listid } = this.props;
    const { title } = this.state;

    if (title) {
      this.props.addCard(listid, title);
      this.setState({ title: "" });
    }

    return;
  };

  renderAddForm = () => {
    const { list } = this.props;
    const placeholder = list ? "Enter List Title" : "Enter Card Title";
    const buttonText = list ? "Add List" : "Add Card";

    return (
      <div>
        <Card className="cardUI">
          <div className="ui input ">
            <input
              type="text"
              placeholder={placeholder}
              onBlur={this.falseStatus}
              autoFocus
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
              style={allStyles.addFormText}
            />
          </div>
        </Card>
        <div
          style={{ marginTop: "8px", display: "flex", alignItems: "center" }}
        >
          <button
            className="ui button"
            onMouseDown={list ? this.addListFunction : this.addCardFunction} //use onMouseDown because onBlur gets called first whih is why onClick doesnt work
            variant="contained"
            style={allStyles.addButton}
          >
            {buttonText}
          </button>
          <Icon style={allStyles.icon}>close</Icon>
        </div>
      </div>
    );
  };

  renderButton = () => {
    const { list } = this.props;

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
        onClick={this.trueStatus}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };

  render() {
    return this.state.formStatus ? this.renderAddForm() : this.renderButton();
  }
}

export default connect(
  null,
  { addList, addCard }
)(LCButton);
