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
    const { listId, cardId, title, user } = this.props;
    console.log({ listId, cardId, title, user });
    if (this.state.moveToValue !== listId)
      this.props.moveCard(this.state.moveToValue, listId, cardId, title, user);
  };

  render() {
    const { lists, listId } = this.props;
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
            const x = listId === list.id ? "disabled" : "";
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
