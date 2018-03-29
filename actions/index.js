import {
  ADD_DECK,
  LOAD_DECKS,
  DELETE_DECK
} from './types'

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

export function deleteDeck(deck) {
  return {
    type: DELETE_DECK,
    deck
  }
}