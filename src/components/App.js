import React from "react";
import TodoList from "./TodoList";
import LCButton from "./LCButton";
import { connect } from "react-redux";
import { allStyles } from "../styles";

class App extends React.Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="appContainer">
        <h2 style={allStyles.mainTitle}>React Redux Trello</h2>
        <div className="listContainer" style={allStyles.listFlow}>
          {lists.map(list => (
            <TodoList
              key={list.id}
              listId={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}

          <LCButton list />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
