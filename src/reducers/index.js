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
      const { cardId, title, user } = action.payload;

      return {
        ...state,
        cards: {
          ...state.cards,
          [cardId]: {
            ...state.cards[cardId],
            title,
            user
          }
        }
      };
    }
    case "MOVE_CARD": {
      const { cardId, moveToValue } = action.payload;
      const v = {
        ...state,
        cards: {
          ...state.cards,
          [cardId]: {
            ...state.cards[cardId],
            listId: moveToValue
          }
        }
      };
      console.log(v);
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
