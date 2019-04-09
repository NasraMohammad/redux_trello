export const addList = title => {
  return {
    type: "ADD_LIST",
    payload: title
  };
};

export const addCard = (listid, title, user = "") => {
  return {
    type: "ADD_CARD",
    payload: { listid, title, user }
  };
};

export const removeCard = (listid, cardid) => {
  return {
    type: "REMOVE_CARD",
    payload: { listid, cardid }
  };
};

export const moveCard = (moveToValue, listid, cardid, title, user) => {
  return {
    type: "MOVE_CARD",
    cardid,
    listid,
    moveToValue,
    title,
    user
  };
};
