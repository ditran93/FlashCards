import {
  ADD_DECK,
  LOAD_DECKS,
  DELETE_DECK
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
    case DELETE_DECK:
      return {
        ...state,
        [action.deck.key]: null
      }
    default:
      return state
  }
}

export default decks