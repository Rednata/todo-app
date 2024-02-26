import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../store/Auth/AuthSlice";
import style from './Auth.module.scss';
import { tasksReducer } from "../../store/Tasks/TaskSlice";

type Props = {}

export const Auth = () => {
  
  const [value, setAuth] = useState('');
  
  const dispatch = useDispatch();
  // let user: string | null = null;

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    const user = localStorage.getItem(value) ;    
    if (user) {      
      dispatch(actions.updateAuth(value))
      dispatch(tasksReducer.actions.fillingTasks(user))
    } else {
      dispatch(actions.inputAuth(value))
    }

  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAuth(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={style.authInput}
        type="text"
        placeholder="Введите имя"
        onChange={handleChange}/>
    </form>
  )
}