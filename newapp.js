import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([]);

  // Add a new goal
  function addGoalHandler(goalText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: goalText, id: Math.random().toString() }
    ]);
  }

  // Delete a goal by id
  function deleteGoalHandler(goalId) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
    <View style={styles.appContainer}>
      {/* Input Section */}
      <GoalInput onAddGoal={addGoalHandler} />

      {/* Goals List */}
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDelete={deleteGoalHandler}
            />
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
    paddingHorizontal: 16,
    backgroundColor: '#f8f8f8'
  },
  goalsContainer: {
    flex: 1,
    marginTop: 20
  }
});