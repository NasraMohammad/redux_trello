const initialState = [];
let listId = 0;
let cardId = 0;

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LIST":
      const newList = {
        title: action.payload,
        cards: [],
        id: listId
      };
      listId += 1;
      return [...state, newList];

    case "ADD_CARD":
      const newCard = {
        title: action.payload.title,
        user: action.payload.user,
        id: cardId
      };
      cardId += 1;

      const newState = state.map(list => {
        if (list.id === action.payload.listId)
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        else {
          return list;
        }
      });
      console.log("newState");
      console.log(newState);
      return newState;

    case "REMOVE_CARD":
      let removedCard = [];
      const updatedState = state.map(list => {
        removedCard = list.cards.filter(card => {
          return card.id !== action.payload.cardId;
        });

        if (removedCard) {
          return { ...list, cards: [...removedCard] };
        } else {
          return list;
        }
      });
      return updatedState;

    case "UPDATE_CARD":
      const updatedCardState = state.map(list => {
        const updatedCard = list.cards.map(card => {
          if (card.id === action.payload.cardId) {
            return {
              ...card,
              title: action.payload.newTitle,
              user: action.payload.newUser
            };
          } else {
            return { ...card };
          }
        });
        return { ...list, cards: [...updatedCard] };
      });

      return updatedCardState;

    case "MOVE_CARD":
      let originalListId = -1;
      let movedCard = {};

      state.map(list => {
        const foundCard = list.cards.find(card => card.id === action.cardId);
        if (foundCard) {
          originalListId = list.id;
          movedCard = { ...foundCard };
        }
      });

      const movedState = state.map(list => {
        let removedCard = [];
        const x = parseInt(action.moveToValue);
        if (list.id === x) {
          return {
            ...list,
            cards: [...list.cards, movedCard]
          };
        } else if (list.id === originalListId) {
          removedCard = list.cards.filter(card => {
            return card.id !== action.cardId;
          });
          return { ...list, cards: [...removedCard] };
        } else {
          return list;
        }
      });
      return movedState;

    default:
      return state;
  }
};

export default listsReducer;
