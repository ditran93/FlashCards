import React, { Component } from 'react'
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert} from 'react-native'
import { createDeck, getDeck } from '../utils/api'
import { generateId } from '../utils/helpers'
import { addDeck } from '../actions'
import { connect } from 'react-redux'

class CreateDeck extends Component {
   state = {
    title: ""
  }
  handleTextChange = (title) => {
    this.setState(() => ({
      title
    }))
  }
  submitDeck = () => {
    const key = generateId()
    const title = this.state.title
    if(!title) {
      return Alert.alert('Please type in a title for your new deck');
    } else {
      createDeck(key, title)
      const newDeck = {
        key: key,
        title: title,
        questions: []
      }
      this.props.addDeck(newDeck)
      const {navigation} = this.props;
      navigation.goBack()
    }
  }
  render() {
    const { title } = this.state
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.text}>What is the title of your new deck?</Text>
        <TextInput
          value={title}
          onChangeText={this.handleTextChange}
          style={styles.title}
          />
        <TouchableOpacity style={styles.submitBtn} onPress={this.submitDeck}>
            <Text style={styles.submitBtnText}>Create Deck</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      color: 'black',
      fontSize: 22,
      textAlign: 'center',
    },
    title: {
      width: 200,
      height: 44,
      padding: 8,
      borderWidth: 1,
      borderColor: 'black',
      margin: 30
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

export default connect(null, {addDeck})(CreateDeck)