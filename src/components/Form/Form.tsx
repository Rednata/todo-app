
import style from './Form.module.scss';

// type Props = {
 
// }

export const Form = () => {
  console.log();
  return (
    <form className={style.form}>
      <input type="text" className={style.input} placeholder='Ввести задачу'/>
    </form>
  )
}