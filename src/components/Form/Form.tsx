import style from './Form.module.scss';
import { useState } from 'react';

type Props = {
}

export const Form = () => {

  const [auth, setAuth] = useState('');

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {    
    setAuth(e.target.value);
  }

  console.log();
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={style.input}
        placeholder='Введите задачу'
        onChange={handleChangeInput}
        />
    </form>
  )
}