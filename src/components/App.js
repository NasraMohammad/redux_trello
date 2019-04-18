import React from "react";
import { connect } from "react-redux";

import TodoList from "./TodoList";
import LCButton from "./LCButton";

import { allStyles } from "../styles";
import { getLists, getCards } from "../selectors";

class App extends React.Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="appContainer">
        <h2 style={allStyles.mainTitle}>React Redux Trello</h2>
        <div className="listContainer" style={allStyles.listFlow}>
          {lists.map((title, key) => (
            <TodoList key={key} listId={key} title={title} />
          ))}
          <LCButton list />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  lists: getLists(state),
  allCards: getCards(state)
});

export default connect(mapStateToProps)(App);
