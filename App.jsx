/**
 * My To Do List App
 *
 * @format
 */

import React /*, {useState} */from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import ToDoForm from './src/ToDoForm';
import ToDoList from './src/ToDoList';


function App() {
  const [tasks, setTasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
    'Study'
  ]);

  const handleTask = (task) => {
    /*const newTasks = tasks
    
    newTasks.push(task);
    
    setTasks(newTasks)

    */

    setTasks([...tasks, task]);
  };


  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm onAddTask={handleTask}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
