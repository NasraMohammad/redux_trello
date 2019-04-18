import React from "react";
import MoveToDropdown from "./MoveToDropdown";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { connect } from "react-redux";
import { removeCard, updateCard } from "../actions";
import { allStyles } from "../styles";

import { getLists } from "../selectors";

class TodoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: "", title: "", flag: false };
  }

  componentDidMount() {
    this.setState({
      title: this.props.title,
      user: this.props.user
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    //   debugger;
    if (prevState.flag === false) {
      return {
        title: nextProps.title,
        user: nextProps.user
      };
    } else if (prevState.flag) {
      return {
        title: prevState.title,
        user: prevState.user
      };
    }

    return null;
  }

  handleChange = e =>
    this.setState({ [e.target.name]: e.target.value, flag: true });

  removeCardFunction = () => {
    this.props.removeCard(this.props.cardId);
  };

  updateCardFunction = () => {
    const { cardId, updateCard } = this.props;
    updateCard(cardId, this.state.title, this.state.user);
    this.setState({ flag: false });
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

  render() {
    return (
      <Card className="cardContainer">
        <CardContent>
          <div className="ui input" style={allStyles.cardTitleText}>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              style={allStyles.customFont}
            />
          </div>
          <div className="ui input" style={allStyles.userInput}>
            <input
              type="text"
              placeholder="Enter User"
              name="user"
              value={this.state.user}
              onChange={this.handleChange}
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
