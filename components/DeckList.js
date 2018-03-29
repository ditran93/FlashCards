import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import {connect} from 'react-redux'
import CreateDeck from './CreateDeck';
import DeckDetails from './DeckDetails'
import {getDecks, clear} from '../utils/api'
import {loadDecks} from '../actions'
import { objectToArray } from '../utils/helpers'

function ListItem (item, navigation) {
  const deck = {...item.item}
  const title = deck['title']
  const numberOfCards = deck['questions'].length
  return(
    <TouchableOpacity key={deck['key']} style={styles.deck} onPress={() => navigation.navigate(
        'DeckDetails',
        {deck: deck},
      )}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.card}>{numberOfCards} card(s)</Text>
    </TouchableOpacity>
  )
}



class DeckList extends Component {
  componentDidMount(){
    const {loadDecks} = this.props
    getDecks().then(result => {
      return loadDecks(result)})
  }
  render() {
    const { decks, navigation } = this.props
    const decksArray = objectToArray(decks)
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.submitBtn} 
          onPress={()=> navigation.navigate(
          'CreateDeck',
          )}>
          <Text style={styles.submitBtnText}>Create Deck</Text>
        </TouchableOpacity>
        <FlatList
          data={decksArray}
          renderItem={(item) => ListItem(item, navigation)}
          keyExtractor={(item, index) => index}
        />
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
    backgroundColor: 'blue',
    padding: 10,
    height: 45,
  }
})

function mapStateToProps(decks) {
  return {
    decks: decks
  }
}
export default connect(mapStateToProps, {loadDecks})(DeckList)