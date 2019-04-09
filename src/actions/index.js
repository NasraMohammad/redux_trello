export const addList = title => {
  return {
    type: "ADD_LIST",
    payload: title
  };
};

export const addCard = (listid, title) => {
  return {
    type: "ADD_CARD",
    payload: { listid, title }
  };
};

export const removeCard = (listid, cardid) => {
  return {
    type: "REMOVE_CARD",
    payload: { listid, cardid }
  };
};
