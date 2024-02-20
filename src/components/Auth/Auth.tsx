import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {authReducer} from '../../store/Auth/AuthSlice';

type Props = {}

export const Auth = () => {
  console.log();
  const [auth, setAuth] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(authReducer.actions.inputAuth(auth))
    

  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAuth(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Введите имя"  onChange={handleChange}/>
    </form>
  )
}