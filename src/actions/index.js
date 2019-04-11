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

export const removeCard = (listId, cardId) => {
  return {
    type: "REMOVE_CARD",
    payload: { listId, cardId }
  };
};

export const moveCard = (moveToValue, listId, cardId, title, user) => {
  return {
    type: "MOVE_CARD",
    cardId,
    listId,
    moveToValue,
    title,
    user
  };
};
