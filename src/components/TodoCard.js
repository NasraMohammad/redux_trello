import React from "react";

import MoveToDropdown from "./MoveToDropdown";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { connect } from "react-redux";
import { removeCard } from "../actions";
import { allStyles } from "../styles";

class TodoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: this.props.user, title: this.props.title };
  }

  state = { user: this.props.user, title: this.props.title };
  removeCardFunction = () => {
    const { listid, cardid } = this.props;
    this.props.removeCard(listid, cardid);
  };

  renderMoveTo = () => {
    const { lists, listid, cardid } = this.props;
    console.log(this.state.user);
    if (lists.length > 1) {
      return (
        <MoveToDropdown
          listid={listid}
          cardid={cardid}
          title={this.state.title}
          user={this.state.user}
        />
      );
    } else return null;
  };

  render() {
    console.log(this.state);
    return (
      <Card className="cardContainer">
        <CardContent>
          <label>
            <div style={allStyles.cardTitleLabel}>Card Title:</div>
            <div className="ui input" style={allStyles.cardTitleText}>
              <input
                type="text"
                value={this.state.title}
                onChange={e => this.setState({ title: e.target.value })}
                style={allStyles.customFont}
              />
            </div>
          </label>
          <div className="ui input" style={allStyles.userInput}>
            <input
              type="text"
              placeholder="Enter User"
              value={this.state.user}
              onChange={e => this.setState({ user: e.target.value })}
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
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(
  mapStateToProps,
  { removeCard }
)(TodoCard);
