import React, { Component } from 'react'
import { StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  TextInput, 
  KeyboardAvoidingView,
  Alert } from 'react-native'
import { addQuestionToDeck } from "../utils/api";
import { addDeck } from '../actions'
import { connect } from 'react-redux'

class AddQuestion extends Component {
  state = {
    question: '',
    answer: ''
  }
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
    return {
      title: `${deck.title}`
    }
  }
  handleQuestionChange = (question) => {
    this.setState(() => ({
      question,
    }))
  }
  handleAnswerChange = (answer) => {
    this.setState(() => ({
      answer,
    }))
  }
  handleOnPress = () => {
    const { question, answer } = this.state
    const { deck } = this.props.navigation.state.params
    if(!question || !answer) {
      return Alert.alert('Please type in both question and answer');
    } else {
      addQuestionToDeck(deck, question, answer).then(data =>{
        this.props.addDeck(data)
      })
      this.goBack()
    }
  }
  goBack() {
    const {navigation} = this.props
    navigation.goBack()
  }
  render() {
    const {question, answer} = this.state
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.text}>Question</Text>
        <TextInput
          value={question}
          onChangeText={this.handleQuestionChange}
          style={styles.title}
          />
        <Text style={styles.text}>Answer</Text>
        <TextInput
          value={answer}
          onChangeText={this.handleAnswerChange}
          style={styles.title}
          />
        <TouchableOpacity style={styles.submitBtn} onPress={this.handleOnPress}>
            <Text style={styles.submitBtnText}>Add Card</Text>
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
    borderWidth: 2,
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

export default connect(null, {addDeck})(AddQuestion)