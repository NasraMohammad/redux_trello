import React from "react";

import MoveToDropdown from "./MoveToDropdown";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { connect } from "react-redux";
import { removeCard } from "../actions";

class TodoCard extends React.Component {
  state = { user: this.props.user, title: this.props.title };
  removeCardFunction = () => {
    const { listid, cardid, dispatch } = this.props;
    dispatch(removeCard(listid, cardid));
  };

  renderMoveTo = () => {
    const { lists, listid, cardid } = this.props;
    if (lists.length > 1) {
      return (
        <MoveToDropdown
          listid={listid}
          cardid={cardid}
          title={this.state.title}
          user={this.props.user}
        />
      );
    } else return null;
  };

  render() {
    // console.log(this.state);
    return (
      <Card className="cardContainer">
        <CardContent>
          <div
            className="ui input"
            style={{ marginBottom: "5px", width: "160px" }}
          >
            <input
              type="text"
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
            />
          </div>
          {this.renderMoveTo()}
          <div
            className="ui input"
            style={{ marginBottom: "5px", width: "160px" }}
          >
            <input
              type="text"
              placeholder="Enter User"
              onChange={e => this.setState({ user: e.target.value })}
            />
          </div>
          <div className="ui checkbox" style={{ marginBottom: "7px" }}>
            <input
              type="checkbox"
              name="example"
              onClick={this.removeCardFunction}
            />
            <label>Task Completed</label>
          </div>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(TodoCard);
