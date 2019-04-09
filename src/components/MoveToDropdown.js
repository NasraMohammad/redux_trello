import React from "react";
//import { Dropdown, Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import { moveCard } from "../actions";

class MoveToDropdown extends React.Component {
  state = { moveToValue: 0 };
  check = e => {
    this.setState({ moveToValue: e.target.value });
  };

  moveFunction = () => {
    const { listid, cardid, title, user, dispatch } = this.props;
    console.log({ listid, cardid, title, user });
    dispatch(moveCard(this.state.moveToValue, listid, cardid, title, user));
  };

  render() {
    const { lists, listid } = this.props;
    return (
      <div
        style={{
          marginTop: "5px",
          fontFamily: "Gill Sans MT",
          borderRadius: "3px",
          padding: "2px"
        }}
      >
        <select
          value={this.state.moveToValue}
          placeholder="Move To"
          onChange={this.check}
          className="ui compact menu"
          style={{
            fontFamily: "Gill Sans MT",
            width: "60px"
          }}
        >
          {lists.map(list => {
            const x = listid === list.id ? "disabled" : "";
            return (
              <option key={list.id} value={list.id} disabled={x}>
                {list.title}
              </option>
            );
          })}
        </select>
        <button
          type="submit"
          onClick={this.moveFunction}
          className="ui blue basic button"
          style={{
            fontFamily: "Gill Sans MT",
            float: "right",
            height: "40px"
          }}
        >
          Move
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(MoveToDropdown);
