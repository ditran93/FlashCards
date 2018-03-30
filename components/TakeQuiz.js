import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearLocalNotification, setLocalNotification,  } from '../utils/helpers'

class TakeQuiz extends Component {
  state = {
    showAnswer: false,
    currentQuestionIndex: 0,
    correctAnswerCount: 0,
    incorrectAnswerCount: 0
  }
  static navigationOptions = ({ navigation }) => {
    const {deck} = navigation.state.params;

    return {
      title: `Quiz in ${deck.title}`
    };
  }
  handleOnPressQA = () => {
    const { showAnswer } = this.state
    this.setState({ showAnswer: !this.state.showAnswer })
  }
  handleOnPressCorrect = () => {
    const { currentQuestionIndex, correctAnswerCount } = this.state
    this.setState({
      currentQuestionIndex: currentQuestionIndex + 1,
      correctAnswerCount: correctAnswerCount + 1
    })
  }
  handleOnPressInCorrect = () => {
    const { currentQuestionIndex, incorrectAnswerCount } = this.state
    this.setState({
      currentQuestionIndex: currentQuestionIndex + 1,
      incorrectAnswerCount: incorrectAnswerCount + 1
    })
  }
  handleRetakeQuiz () {
    this.setState({
      currentQuestionIndex: 0,
      correctAnswerCount: 0,
      incorrectAnswerCount: 0
    })
  }
  renderContent() {
      const { deck } = this.props.navigation.state.params
      const totalQuestions = deck['questions'].length
      const { currentQuestionIndex, showAnswer } = this.state
      let question = deck.questions[currentQuestionIndex].question
      let answer = deck.questions[currentQuestionIndex].answer
      return (
        <View style={styles.container}>
          <Text style={styles.questionIndexText}>{currentQuestionIndex + 1}/{totalQuestions}</Text>
          <View style={styles.content}>
            <Text style={styles.questionText}>{this.state.showAnswer ? answer : question}</Text>
            <TouchableOpacity onPress={this.handleOnPressQA}>
              <Text style={styles.answerBtnText}>{showAnswer ? 'Question' : 'Answer' }</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.correctBtn} onPress={this.handleOnPressCorrect}>
              <Text style={styles.btnText}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.incorrectBtn} onPress={this.handleOnPressInCorrect}>
              <Text style={styles.btnText}>Incorrect</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    renderResult() {
      const { deck } = this.props.navigation.state.params
      const { correctAnswerCount, incorrectAnswerCount } = this.state
      const totalQuestions = deck['questions'].length
      const { navigation } = this.props
      clearLocalNotification().then(setLocalNotification)
      return ( 
        <View style={styles.content}>
          <Text style={styles.questionText}>Congratulations! You finished the quiz.</Text>
          <Text style={styles.questionText}>You got {(correctAnswerCount*100/totalQuestions)}% correct</Text>
          <TouchableOpacity style={styles.correctBtn} onPress={() => this.handleRetakeQuiz()}>
              <Text style={styles.btnText}>Retake</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.correctBtn} onPress={() => navigation.goBack()}>
              <Text style={styles.btnText}>Back To Deck</Text>
          </TouchableOpacity>
        </View>
      )
    }
  render() {
    const { deck } = this.props.navigation.state.params
    const totalQuestions = deck['questions'].length
    const { currentQuestionIndex } = this.state
    if (currentQuestionIndex <= totalQuestions - 1) {
      return (
        this.renderContent()
      )
    } else {
      return(
        this.renderResult()
      )
    }
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  questionText: {
    color: 'black',
    fontSize: 33,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  answerBtnText: {
    color: 'red',
    fontSize: 22,
    textAlign: 'center',
  },
  correctBtn: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 7,
    height: 45,
    width: 200,
    marginTop: 30
  },
  incorrectBtn: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 7,
    height: 45,
    width: 200,
    marginTop: 30
  },
  btnText : {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  questionIndexText: {
    color: 'black',
    fontSize: 22,
  },

})


export default TakeQuiz