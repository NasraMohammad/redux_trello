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
      <div>
        <select
          value={this.state.moveToValue}
          placeholder="Move To"
          onChange={this.check}
        >
          {lists.map(list => {
            const x = listid === list.id ? "disabled" : "";
            return (
              <option key={list.id} value={list.id} disabled={x}>
                {list.id}
              </option>
            );
          })}
        </select>
        <button type="submit" onClick={this.moveFunction}>
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
