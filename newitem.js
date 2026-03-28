import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <Pressable onPress={() => props.onDelete(props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#4e8cff',
    padding: 12,
    marginVertical: 6,
    borderRadius: 8
  },
  text: {
    color: '#fff',
    fontSize: 16
  }
});