import { ChangeEvent, useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../store/Auth/AuthSlice";
import style from './Auth.module.scss';
import { tasksReducer } from "../../store/Tasks/TaskSlice";

export const Auth = () => {
  const [value, setAuth] = useState('');
  const dispatch = useDispatch();
  const inputRef = useRef<(HTMLInputElement)>(null);

  useEffect(() => {        
      inputRef.current?.focus();    
  }, []);

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
        ref={inputRef}
        onChange={handleChange}/>
    </form>
  )
}