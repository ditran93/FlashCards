import {
  ADD_DECK,
  LOAD_DECKS
} from '../actions'

function decks(state = {}, action) {
  switch(action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action.deck.key]: action.deck
      }
    case LOAD_DECKS:
      return {
        ...state,
        ...action.decks
      }
    default:
      return state
  }
}

export default decks