import React from "react";
import TodoCard from "./TodoCard";
import LCButton from "./LCButton";

const TodoList = ({ title, cards, listId }) => {
  //  console.log(cards);
  return (
    <div className="container">
      <h4>{title}</h4>
      {cards.map(card => (
        <TodoCard
          key={card.id}
          title={card.title}
          listId={listId}
          cardId={card.id}
          user={card.user}
        />
      ))}
      <LCButton listId={listId} />
    </div>
  );
};

export default TodoList;
