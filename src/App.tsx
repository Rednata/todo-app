import React from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Form } from './components/Form/Form';
import { TaskTable } from './components/TaskTable/TaskTable';
import { Auth } from './components/Auth/Auth';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Auth />

      {/*
      <div className="my-container">
        <Form plholder='Введите задачу'/>
        <Button clName='btn btn-success' text='Сохранить' />
        <Button clName='btn btn-warning' text='Очистить' />        
      </div>            
      <TaskTable clName='list-group'/> */}
    </div>
  );
}

export default App;
