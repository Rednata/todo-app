import style from './Form.module.scss';
import { useState } from 'react';
import { tasksReducer } from '../../store/Tasks/TaskSlice';
import { useDispatch } from 'react-redux';

type Props = {
}

export const Form = () => {

  const createID = () => Math.random().toString(16).slice(2,8);

  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const id = createID();
    dispatch(tasksReducer.actions.inputTask({value, id}));    
    setValue('');
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {    
    setValue(e.target.value);
  }

  console.log();
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={style.input}
        placeholder='Введите задачу'
        value={value}
        onChange={handleChangeInput}
        />
    </form>
  )
}