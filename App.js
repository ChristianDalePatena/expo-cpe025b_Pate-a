import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList
} from 'react-native';
import GoalItem from './components/GoalItem'; 

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) return;

    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);

    setEnteredGoalText('');
  }

  return (
    <View style={styles.appContainer}>

      {/* Input Section */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="What are your Goals?"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="ADD GOAL" onPress={addGoalHandler} />
      </View>

      {/* Goals List */}
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <GoalItem text={itemData.item.text} />
)}
          keyExtractor={(item) => item.id}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },

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
  },

  goalsContainer: {
    flex: 1
  }
});