import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../store/Auth/AuthSlice";

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
      <input type="text" placeholder="Введите имя"  onChange={handleChange}/>
    </form>
  )
}