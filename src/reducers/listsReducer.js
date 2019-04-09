const initialState = [];
let listid = 0;
let cardid = 0;

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LIST":
      const newList = {
        title: action.payload,
        cards: [],
        id: listid
      };
      listid += 1;
      return [...state, newList];

    case "ADD_CARD":
      const newCard = {
        title: action.payload.title,
        id: cardid
      };
      cardid += 1;
      const newState = state.map(list => {
        if (list.id === action.payload.listid)
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        else {
          return list;
        }
      });
      return newState;

    case "REMOVE_CARD":
      let removedCard = [];
      const updatedState = state.map(list => {
        if (list.id === action.payload.listid) {
          removedCard = list.cards.filter(card => {
            return card.id !== action.payload.cardid;
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
