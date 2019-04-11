import React from "react";
//import { Dropdown, Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import { moveCard } from "../actions";
import { allStyles } from "../styles";

class MoveToDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { moveToValue: 0 };
  }

  check = e => {
    console.log(this.state.moveTovalue);
    this.setState({ moveToValue: e.target.value });
  };

  moveFunction = () => {
    const { listid, cardid, title, user } = this.props;
    console.log({ listid, cardid, title, user });
    if (this.state.moveToValue !== listid)
      this.props.moveCard(this.state.moveToValue, listid, cardid, title, user);
  };

  render() {
    const { lists, listid } = this.props;
    return (
      <div>
        <select
          value={this.state.moveToValue}
          placeholder="Move To"
          onChange={this.check}
          className="ui compact menu"
          style={allStyles.selectInput}
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
          style={allStyles.moveButton}
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

export default connect(
  mapStateToProps,
  { moveCard }
)(MoveToDropdown);
