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
            <div
              style={{ float: "left", paddingRight: "4px", fontSize: "16px" }}
            >
              Card Title:
            </div>
            <div
              className="ui input"
              style={{ marginBottom: "8px", width: "70px" }}
            >
              <input
                type="text"
                value={this.state.title}
                onChange={e => this.setState({ title: e.target.value })}
                style={{ fontFamily: "Gill Sans MT" }}
              />
            </div>
          </label>
          <div
            className="ui input"
            style={{ marginBottom: "5px", width: "160px" }}
          >
            <input
              type="text"
              placeholder="Enter User"
              value={this.state.user}
              onChange={e => this.setState({ user: e.target.value })}
              style={{ fontFamily: "Gill Sans MT" }}
            />
          </div>
          <div className="ui checkbox" style={{ marginBottom: "7px" }}>
            <input
              type="checkbox"
              name="example"
              onClick={this.removeCardFunction}
              style={{ fontFamily: "Gill Sans MT" }}
            />
            <label style={{ color: "#5aac44" }}>Task Completed</label>
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

export default connect(mapStateToProps)(TodoCard);
