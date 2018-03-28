import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class TakeQuiz extends Component {
  render() {
    const { decks } = this.props
    console.log('decks from take quiz: ', decks)
    return (
      <View>
        <Text>Take Quiz</Text>
      </View>
    )
  }
}

function mapStateToProps(decks) {
  return {
    decks: decks
  }
}

export default connect(mapStateToProps)(TakeQuiz)