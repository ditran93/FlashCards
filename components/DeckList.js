import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { data } from '../utils/helpers'

export default class DeckList extends Component {
  render() {
    const deckArray = Object.keys(data)
    
    return (
      <View>
        {deckArray.map((deck) => {
          debugger
          <View>
            <Text>{data[deck]['title']}</Text>
          </View>
        })}
      </View>
    )
  }
}

