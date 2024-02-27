import style from './Form.module.scss';
import { useEffect, useRef, useState } from 'react';
import { tasksReducer } from '../../store/Tasks/TaskSlice';
import { useDispatch } from 'react-redux';
import { Button } from '../Button/Button';

export const Form = () => {
  const [value, setValue] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [importance, setImportance] = useState('regular');
  const dispatch = useDispatch();
  const inputRef = useRef<(HTMLInputElement)>(null);

  useEffect(() => {        
      inputRef.current?.focus();    
  }, []);

  const createID = () => Math.random().toString(16).slice(2,8);
  const makeDisabledButton = () => setDisabled(true);

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {    
    e.preventDefault();
    const id = createID();
    const finish = false;
    if (value.length) {
      dispatch(tasksReducer.actions.inputTask({value, id, finish, importance}));    
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

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {        
    setImportance(e.target.value)    
  }
  
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={style.input}
        placeholder='Введите задачу'
        value={value}
        ref={inputRef}
        onChange={handleChangeInput}        
      />            
      <select
         className={style.select}        
         id=""
         onChange={handleSelectChange}
         disabled={disabled}
      >
        <option value="regular">обычная</option>
        <option value="important">важная</option>
        <option value="urgent">срочная</option>
      </select>
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