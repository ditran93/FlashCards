export const ADD_DECK = 'ADD_DECK'
export const LOAD_DECKS ='LOAD_DECKS'

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function loadDecks(decks) {
  return {
    type: LOAD_DECKS,
    decks
  }
}