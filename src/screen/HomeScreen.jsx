import React from 'react';
import {Button, SafeAreaView} from 'react-native';

import ToDoList from '../ToDoList';
import ToDoForm from '../ToDoForm';

function Home({navigation}) {

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
        <>
            <SafeAreaView>
                <ToDoList tasks={tasks}/>
                <ToDoForm onAddTask={handleTask}/>

                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}
                />
            </SafeAreaView>
        </>
    )
}

export default About;