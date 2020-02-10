import React, {useState} from 'react';
import { 
  StyleSheet, 
  View, 
  Button, 
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  console.log('RE-RENDERING COMPONENT');
  console.log(courseGoals);

  const addGoalHandler = goalTitle => {
    if(goalTitle.length === 0){
      return;
    }
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      {id: Math.random().toString(), value: goalTitle}
    ]);

    setIsAddMode(false);
  };

  const cancelAddModeHandler = () => {
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    console.log('TO BE DELETED: ' + goalId);
    console.log(courseGoals);
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
      <View style={styles.screen}>
        <Button title="Add a Goal" onPress={() => setIsAddMode(true)}/>
        <GoalInput
          addItem={addGoalHandler}
          isVisible={isAddMode}
          cancel={cancelAddModeHandler}
        />
        <FlatList 
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem 
              title={itemData.item.value}
              id={itemData.item.id}
              onDelete={removeGoalHandler}
            />
          )}          
        />
      </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

});
