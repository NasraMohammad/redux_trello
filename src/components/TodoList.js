import React from "react";
import { connect } from "react-redux";

import TodoCard from "./TodoCard";
import LCButton from "./LCButton";
import { getCardsOfList } from "../selectors";

class TodoList extends React.Component {
  render() {
    return (
      <div className="container">
        <h4>{this.props.title}</h4>
        {this.props.cards.map((card, key) => {
          return (
            <TodoCard
              key={key}
              title={card.title}
              listId={card.listId}
              cardId={card.cardId}
              user={card.user}
            />
          );
        })}
        <LCButton listId={this.props.listId} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  cards: getCardsOfList(state, ownProps.listId)
});

export default connect(mapStateToProps)(TodoList);
