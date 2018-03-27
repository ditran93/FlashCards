import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DeckList from './components/DeckList'
import CreateDeck from './components/CreateDeck'
import { Constants } from 'expo'
import { StackNavigator } from "react-navigation"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import DeckDetails from './components/DeckDetails'
import AddQuestion from './components/AddQuestion'

function CustomStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const store = createStore(reducers)

const Stack = StackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      headerTintColor: 'white',
      headerTitle: 'Deck List',
      headerStyle: {
        backgroundColor: 'green'
      }
    }
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      headerTintColor: 'white',
      headerTitle: 'Create A New Deck',
      headerStyle: {
        backgroundColor: 'green'
      }
    }
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: {
      headerTintColor: 'white',
      headerTitle: 'Deck Details',
      headerStyle: {
        backgroundColor: 'green'
      }
    }
  },
  AddQuestion: {
    screen: AddQuestion,
    navigationOptions: {
      headerTintColor: 'white',
      headerTitle: 'Add Question',
      headerStyle: {
        backgroundColor: 'green'
      }
    }
  }
})


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <CustomStatusBar backgroundColor='green' barStyle='light-content' />
          <Stack />
        </View>
       </Provider>
    );
  }
}
