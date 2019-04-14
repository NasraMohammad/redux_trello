export const addList = title => {
  return {
    type: "ADD_LIST",
    payload: title
  };
};

export const addCard = (listId, title, user = "") => {
  return {
    type: "ADD_CARD",
    payload: { listId, title, user }
  };
};

export const removeCard = cardId => {
  return {
    type: "REMOVE_CARD",
    payload: { cardId }
  };
};

export const moveCard = (moveToValue, cardId) => {
  return {
    type: "MOVE_CARD",
    cardId,
    moveToValue
  };
};

export const updateCard = (cardId, newTitle, newUser) => {
  return {
    type: "UPDATE_CARD",
    payload: { cardId, newTitle, newUser }
  };
};
