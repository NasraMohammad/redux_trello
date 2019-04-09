import React from "react";
import TodoCard from "./TodoCard";
import LCButton from "./LCButton";

const TodoList = ({ title, cards, listid }) => {
  //  console.log(cards);
  return (
    <div className="container">
      <h4>{title}</h4>
      {cards.map(card => (
        <TodoCard
          key={card.id}
          title={card.title}
          listid={listid}
          cardid={card.id}
        />
      ))}
      <LCButton listid={listid} />
    </div>
  );
};

export default TodoList;
