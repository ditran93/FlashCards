export const ADD_DECK = 'ADD_DECK'
export const LOAD_DECKS ='LOAD_DECKS'

export function addDeck(deck) {
  console.log('deck: ', deck)
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