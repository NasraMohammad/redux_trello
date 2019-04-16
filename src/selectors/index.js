export const getLists = state =>
  Object.keys(state.lists).map(key => state.lists[key]);

export const getCards = state =>
  Object.keys(state.cards).map(cardId => state.cards[cardId]);

export const getCardsOfList = (state, listId) =>
  getCards(state) ? getCards(state).filter(card => card.listId === listId) : [];
