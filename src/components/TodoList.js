import React from "react";
import { connect } from "react-redux";
import TodoCard from "./TodoCard";
import LCButton from "./LCButton";
import { getCardsOfList } from "../selectors";

const TodoList = ({ listId, title, cards }) => (
  <div className="container">
    <h4>{title}</h4>
    {cards.map((card, key) => (
      <TodoCard
        key={key}
        title={card.title}
        listId={listId}
        cardId={card.cardId}
        user={card.user}
      />
    ))}
    <LCButton listId={listId} />
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  cards: getCardsOfList(state, ownProps.listId)
});

export default connect(mapStateToProps)(TodoList);
