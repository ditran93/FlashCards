import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import CreateDeck from './CreateDeck';
import DeckDetails from './DeckDetails'
import {getDecks, clear} from '../utils/api'
import {loadDecks} from '../actions'

class DeckList extends Component {
  componentDidMount() {
    getDecks().then(result => this.props.loadDecks(result))
  }
  render() {
    const { decks, navigation } = this.props
    console.log('decks: ', decks)
    const deckArray = Object.keys(decks)
    return (
      <View>
        {deckArray.map((deck) => {
          const title = decks[deck]['title']
          const numberOfCards = decks[deck]['questions'].length
          const key = decks[deck]['key']

          return(
            <TouchableOpacity key={key} style={styles.deck} onPress={() => navigation.navigate(
                'DeckDetails',
                {key: key}
              )}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.card}>{numberOfCards} card(s)</Text>
            </TouchableOpacity>
          )})
        }
        <TouchableOpacity 
          style={styles.submitBtn} 
          onPress={()=> navigation.navigate(
          'CreateDeck',
        )}>
          <Text style={styles.submitBtnText}>Create Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: 'white'
  },
  deck: {
    height: 100,
    justifyContent: 'center',
    margin: 10,
    borderWidth: 3
  },
  card: {
    fontSize: 15,
    color: 'grey',
    textAlign: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  submitBtnText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  submitBtn: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  }
})

function mapStateToProps(decks) {
  return {
    decks: decks
  }
}
export default connect(mapStateToProps, {loadDecks})(DeckList)