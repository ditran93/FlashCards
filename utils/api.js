import { AsyncStorage } from 'react-native'
import AddQuestion from '../components/AddQuestion';

const DECKS_STORAGE_KEY = 'FlashCards:decks'

export function clear() {
  return AsyncStorage.clear()
}

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(data => {
    return data === null
      ? {}
      : JSON.parse(data)
  })
}

export function createDeck(key, title, questions=[]) {
  const data = JSON.stringify({
    [key]: {
      key: key,
      title: title,
      questions: questions
    } 
  })
 return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, data)
  .then(() => {
    return getDeck(key)
  })
}

export function addQuestionToDeck(deck, question, answer) {
  const card = {
    question: question,
    answer: answer
  }
  const {questions} = deck
  questions.push(card)
  const { key, title } = deck
  return createDeck(key, title, questions)
}

export function getDeck(key) {
  return getDecks().then(decks => {
    return Object.keys(decks).length === 0
      ? {}
      : decks[key]
  })
}