import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'FlashCards:decks'

export function createDeck({ key, title, questions=[] }) {
  const data = JSON.stringify({
    [key]: {
      key: key,
      title: title,
      questions: questions
    }
  })
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, data)
}

export function getDeck(key) {
  return getDecks().then(decks => {
    return Object.keys(decks).length === 0
      ? {}
      : decks[key]
  })
}

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(data => {
    return data === null
      ? {}
      : JSON.parse(data)
  })
}

export function addQuestionToDeck(deck, question, answer) {

  const {key, title} = deck
  let { questions } = deck
  const card = {
    question: question,
    answer: answer 
  }
  questions.push(card)
  deck = {
    ...deck,
    questions
  }
  const data = JSON.stringify({
    key: {
      ...deck
    }
  })
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, data)
}

export function clear() {
  return AsyncStorage.clear()
}