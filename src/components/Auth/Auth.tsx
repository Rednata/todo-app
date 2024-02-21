import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../store/Auth/AuthSlice";
import style from './Auth.module.scss';

type Props = {}

export const Auth = () => {
  const [value, setAuth] = useState('');
  
  const dispatch = useDispatch();
  let user: string | null = null;

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    user = localStorage.getItem(value);    
    console.log('user:: ', user);
    dispatch(actions.inputAuth(value))
    
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