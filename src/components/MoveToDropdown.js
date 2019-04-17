import React from "react";

import { connect } from "react-redux";
import { moveCard } from "../actions";
import { allStyles } from "../styles";

import { getLists } from "../selectors";

class MoveToDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.moveFunction = this.moveFunction.bind(this);

    this.state = { moveToValue: 0 };
  }

  onSelectChange(value) {
    this.setState({ moveToValue: parseInt(value) });
  }

  moveFunction() {
    const { listId, cardId } = this.props;
    console.log(listId, this.state.moveToValue, cardId);
    if (this.state.moveToValue !== listId) {
      this.props.moveCard(cardId, this.state.moveToValue);
    }
  }

  render() {
    const { lists, listId } = this.props;
    return (
      <div>
        <select
          value={this.state.moveToValue}
          placeholder="Move To"
          onChange={event => this.onSelectChange(event.target.value)}
          className="ui compact menu"
          style={allStyles.selectInput}
        >
          {lists.map((title, key) => {
            const x = listId === key ? "disabled" : "";
            return (
              <option key={key} value={key} disabled={x}>
                {title}
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
  lists: getLists(state)
  // cards: getCardsOfList(state, ownProps.listId)
});

export default connect(
  mapStateToProps,
  { moveCard }
)(MoveToDropdown);
