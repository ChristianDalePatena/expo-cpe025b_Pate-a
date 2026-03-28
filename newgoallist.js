import { View, FlatList, StyleSheet } from 'react-native';
import GoalItem from './GoalItem';

function GoalList(props) {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={props.goals}
        renderItem={(itemData) => (
          <GoalItem text={itemData.item.text} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default GoalList;

const styles = StyleSheet.create({
  goalsContainer: {
    height: 300
  }
});