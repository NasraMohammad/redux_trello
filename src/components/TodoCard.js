import React from "react";

import MoveToDropdown from "./MoveToDropdown";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { connect } from "react-redux";
import { removeCard } from "../actions";

class TodoCard extends React.Component {
  removeCardFunction = () => {
    const { listid, cardid, dispatch } = this.props;
    dispatch(removeCard(listid, cardid));
    //   console.log(this.props);
  };

  renderMoveTo = () => {
    const { lists, listid, cardid } = this.props;
    console.log(lists.length);
    if (lists.length > 1) {
      return <MoveToDropdown orignalListId={listid} originalCardid={cardid} />;
    } else return null;
  };

  render() {
    const { title } = this.props;

    return (
      <Card className="cardContainer">
        <CardContent>
          <p>{title}</p>
          {this.renderMoveTo()}
          <div
            className="ui input"
            style={{ marginBottom: "5px", width: "160px" }}
          >
            <input type="text" placeholder="Enter User" />
          </div>
          <div className="ui checkbox" style={{ marginBottom: "7px" }}>
            <input
              type="checkbox"
              name="example"
              onClick={this.removeCardFunction}
            />
            <label>Task Completed</label>
          </div>
          <button className="ui primary button">Update Card</button>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(TodoCard);
