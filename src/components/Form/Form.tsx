import style from './Form.module.scss';
import { useEffect, useState } from 'react';
import { tasksReducer } from '../../store/Tasks/TaskSlice';
import { useDispatch } from 'react-redux';
import { Button } from '../Button/Button';

export const Form = () => {

  const createID = () => Math.random().toString(16).slice(2,8);

  const [value, setValue] = useState('');
  const [disabled, setDisabled] = useState(true);

  const dispatch = useDispatch();
  
  const makeDisabledButton = () => {
    setDisabled(true);
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {    
    e.preventDefault();
    const id = createID();
    const finish = false;
    if (value.length) {
      dispatch(tasksReducer.actions.inputTask({value, id, finish}));    
      setValue('');         
    } 
      makeDisabledButton();
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {    
    setDisabled(false);
    setValue(e.target.value);
  }

  const handleClickClear = () => {
    setValue('');
    makeDisabledButton();    
  }
  
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={style.input}
        placeholder='Введите задачу'
        value={value}
        onChange={handleChangeInput}        
      />            
      <Button
        clName='btn btn-success'
        text='Сохранить'
        type='submit'      
        disabled={disabled}        
        />
      <Button
        clName='btn btn-warning'
        text='Очистить'
        func={handleClickClear}
        type='button'
      />                   
    </form>
  )
}