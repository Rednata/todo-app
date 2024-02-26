import React from 'react';
import './App.css';
import { Form } from './components/Form/Form';
import { TaskTable } from './components/TaskTable/TaskTable';
import { Auth } from './components/Auth/Auth';
import { useAppSelector } from './hooks';

function App() {
  const auth = useAppSelector(state => state.auth.authName);

  return (
    <div className="App">
      <h1>Todo App</h1>          
      {!auth ? (
        <Auth />
      ) : (
        <>
          <div className="my-container">
            <Form />          
          </div>
          <TaskTable clName='list-group'/>
        </>
        
      )
        
      }
      </div>
  );
}

export default App;
