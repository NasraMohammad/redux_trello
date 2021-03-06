const initialState = {
  lists: {},
  cards: {}
};

let newListId = 0;
let newCardId = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LIST": {
      const listId = newListId;
      newListId++;

      return {
        ...state,
        lists: {
          ...state.lists,
          [listId]: action.payload
        }
      };
    }
    case "ADD_CARD": {
      const { listId, title, user } = action.payload;

      const cardId = newCardId;
      newCardId++;

      return {
        ...state,
        cards: {
          ...state.cards,
          [cardId]: {
            cardId,
            listId,
            title,
            user,
            done: false
          }
        }
      };
    }
    case "REMOVE_CARD": {
      const { cardId } = action.payload;
      return {
        ...state,
        cards: {
          ...state.cards,
          [cardId]: {
            ...state.cards[cardId],
            done: true
          }
        }
      };
    }
    case "UPDATE_CARD": {
      const { cardId, newTitle, newUser } = action.payload;

      return {
        ...state,
        cards: {
          ...state.cards,
          [cardId]: {
            ...state.cards[cardId],
            title: newTitle,
            user: newUser
          }
        }
      };
    }
    case "MOVE_CARD": {
      const { cardId, moveToValue } = action.payload;
      return {
        ...state,
        cards: {
          ...state.cards,
          [cardId]: {
            ...state.cards[cardId],
            listId: moveToValue
          }
        }
      };
    }
    default:
      return state;
  }
};

export default reducer;
