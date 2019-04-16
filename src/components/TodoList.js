import React from "react";
import { connect } from "react-redux";

import TodoCard from "./TodoCard";
import LCButton from "./LCButton";
import { getCardsOfList } from "../selectors";

// const TodoList = ({ listId, title, cards }) => {
//   return (
//     <div className="container">
//       <h4>{title}</h4>
//       {cards.map((card, key) => {
//         console.log(card);
//         debugger;
//         return (
//           <TodoCard
//             key={key}
//             title={card.title}
//             listId={card.listId}
//             cardId={card.cardId}
//             user={card.user}
//           />
//         );
//       })}
//       <LCButton listId={listId} />
//     </div>
//   );
// };

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: "", title: "" };
  }

  handleTitle = e => this.setState({ title: e.target.value });

  handleUser = e => {
    debugger;
    return this.setState({ user: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <h4>{this.props.title}</h4>
        {this.props.cards.map((card, key) => (
          <TodoCard
            key={key}
            title={card.title}
            listId={card.listId}
            cardId={card.cardId}
            user={card.user}
            handleUser={this.handleUser}
            handleTitle={this.handleTitle}
          />
        ))}
        <LCButton listId={this.props.listId} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  cards: getCardsOfList(state, ownProps.listId)
});

export default connect(mapStateToProps)(TodoList);
