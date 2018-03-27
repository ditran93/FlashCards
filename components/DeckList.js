import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import CreateDeck from './CreateDeck';
import DeckDetails from './DeckDetails'

function CreateDeckBtn ({ onPress }) {
  return (
    <TouchableOpacity style={styles.submitBtn} onPress={onPress}>
      <Text style={styles.submitBtnText}>Create Deck</Text>
    </TouchableOpacity>
  )
}

class DeckList extends Component {
  render() {
    const { decks, navigation } = this.props
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
              <Text style={styles.card}>{numberOfCards} cards</Text>
            </TouchableOpacity>
          )})
        }
        <CreateDeckBtn onPress={()=> navigation.navigate(
          'CreateDeck',
        )}/>
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
export default connect(mapStateToProps)(DeckList)