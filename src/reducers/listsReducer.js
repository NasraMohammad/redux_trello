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
        user: action.payload.user,
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

    case "MOVE_CARD":
      const movedCard = {
        title: action.title,
        user: action.user,
        id: action.cardid
      };

      const movedState = state.map(list => {
        let removedCard = [];
        const x = parseInt(action.moveToValue);
        // console.log(list.id);
        // console.log(action.moveToValue);
        // console.log(x);
        if (list.id === x) {
          return {
            ...list,
            cards: [...list.cards, movedCard]
          };
        } else if (list.id === action.listid) {
          removedCard = list.cards.filter(card => {
            return card.id !== action.cardid;
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
