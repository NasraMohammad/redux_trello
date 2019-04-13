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
      return newState;

    case "MOVE_CARD":
      const movedCard = {
        title: action.title,
        user: action.user,
        id: action.cardId
      };

      const movedState = state.map(list => {
        let removedCard = [];
        const x = parseInt(action.moveToValue);

        if (list.id === x) {
          return {
            ...list,
            cards: [...list.cards, movedCard]
          };
        } else if (list.id === action.listId) {
          removedCard = list.cards.filter(card => {
            return card.id !== action.cardId;
          });
          return { ...list, cards: [...removedCard] };
        } else {
          return list;
        }
      });
      return movedState;

    case "REMOVE_CARD":
      let removedCard = [];
      const updatedState = state.map(list => {
        if (list.id === action.payload.listId) {
          removedCard = list.cards.filter(card => {
            return card.id !== action.payload.cardId;
          });
          return { ...list, cards: [...removedCard] };
        } else {
          return list;
        }
      });
      return updatedState;

    default:
      return state;
  }
};

export default listsReducer;
