import React from "react";
import MoveToDropdown from "./MoveToDropdown";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { connect } from "react-redux";
import { removeCard, updateCard } from "../actions";
import { allStyles } from "../styles";

import { getLists } from "../selectors";

class TodoCard extends React.Component {
  removeCardFunction = () => {
    this.props.removeCard(this.props.cardId);
  };

  renderMoveTo = () => {
    const { lists, listId, cardId, title, user } = this.props;
    if (lists.length > 1) {
      return (
        <MoveToDropdown
          listId={listId}
          cardId={cardId}
          title={title}
          user={user}
        />
      );
    } else return null;
  };

  updateCardFunction = () => {
    const { title, user, cardId, updateCard } = this.props;
    updateCard(cardId, title, user);
  };

  render() {
    console.log(this.props);
    //console.log(this.props.handleUser);
    const { title, user, handleUser, handleTitle } = this.props;
    return (
      <Card className="cardContainer">
        <CardContent>
          <div className="ui input" style={allStyles.cardTitleText}>
            <input
              type="text"
              value={title}
              onChange={handleTitle}
              style={allStyles.customFont}
            />
          </div>
          <div className="ui input" style={allStyles.userInput}>
            <input
              type="text"
              placeholder="Enter User"
              value={user}
              onChange={handleUser}
              style={allStyles.customFont}
            />
          </div>
          <div className="ui checkbox" style={allStyles.checkboxInput}>
            <input
              type="checkbox"
              name="example"
              onClick={this.removeCardFunction}
              style={allStyles.customFont}
            />
            <label style={allStyles.taskLabel}>Task Completed</label>
          </div>
          {this.renderMoveTo()}
          <button
            type="submit"
            onClick={this.updateCardFunction}
            className="ui blue basic button"
            style={allStyles.updateButton}
          >
            Update
          </button>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  lists: getLists(state)
});

export default connect(
  mapStateToProps,
  { removeCard, updateCard }
)(TodoCard);
