// File: components/GoalInput.js
import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function GoalInput(props) {
  const [goalText, setGoalText] = useState('');

  function handleInput(text) {
    setGoalText(text);
  }

  function handleAddGoal() {
    if (goalText.trim().length === 0) return;

    props.onAddGoal(goalText); // Send input to App
    setGoalText('');           // Clear input
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your new goal..."
        style={styles.input}
        onChangeText={handleInput}
        value={goalText}
      />
      <Button title="Add" onPress={handleAddGoal} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    padding: 10,
    borderRadius: 5
  }
});