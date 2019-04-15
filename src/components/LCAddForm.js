import React from "react";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import { allStyles } from "../styles";

class LCAddForm extends React.Component {
  render() {
    const {
      list,
      falseStatus,
      handleTitle,
      title,
      addListFunction,
      addCardFunction
    } = this.props;
    const placeholder = list ? "Enter List Title" : "Enter Card Title";
    const buttonText = list ? "Add List" : "Add Card";

    return (
      <div>
        <Card className="cardUI">
          <div className="ui input ">
            <input
              type="text"
              placeholder={placeholder}
              onBlur={falseStatus}
              autoFocus
              value={title}
              onChange={handleTitle}
              style={allStyles.addFormText}
            />
          </div>
        </Card>
        <div style={allStyles.LCAddFormButton}>
          <button
            className="ui button"
            onMouseDown={list ? addListFunction : addCardFunction} //use onMouseDown because onBlur gets called first whih is why onClick doesnt work
            variant="contained"
            style={allStyles.addButton}
          >
            {buttonText}
          </button>
          <Icon style={allStyles.icon}>close</Icon>
        </div>
      </div>
    );
  }
}

export default LCAddForm;
