import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) return;

    props.onAddGoal(enteredGoalText); // send data to App
    setEnteredGoalText(''); // clear input
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="What are your Goals?"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="ADD GOAL" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  }
});