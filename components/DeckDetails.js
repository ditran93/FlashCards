import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class DeckDetails extends Component {
  render() {
    const { key } = this.props.navigation.state.params
    const { decks } = this.props
    console.log(decks[key]['title'])
    const title = decks[key]['title']
    const numberOfCards = decks[key]['questions'].length
    return (
      <View style={styles.container}>
        <View style={{marginBottom: 100}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.card}>{numberOfCards} cards</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Take Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 200,
  },
  card: {
    fontSize: 30,
    color: 'grey',
    textAlign: 'center'
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  btn: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginTop: 20
  },
  btnText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  }
})

function mapStateToProps(decks) {
  return{
    decks: decks
  }
}

export default connect(mapStateToProps)(DeckDetails)