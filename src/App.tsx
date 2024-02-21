import React from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Form } from './components/Form/Form';
import { TaskTable } from './components/TaskTable/TaskTable';
import { Auth } from './components/Auth/Auth';
import { useAppSelector } from './hooks';
// import { Task1 } from './components/Task/Task';

function App() {
  const auth = useAppSelector(state => state.auth.authName);
  
  console.log('auth: ', auth);
  return (
    <div className="App">
      {/* <Task1 text1='rrrrrrr' key1='897'/> */}
      <h1>Todo App</h1>          
      {!auth ? (
        <Auth />
      ) : (
        <>
          <div className="my-container">
            <Form />
            {/* <Button clName='btn btn-success' text='Сохранить' />
            <Button clName='btn btn-warning' text='Очистить' />            */}
          </div>
          <TaskTable clName='list-group'/>
        </>
        
      )
        
      }
      </div>
  );
}

export default App;
