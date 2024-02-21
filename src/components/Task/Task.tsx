import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks";
import { Button } from "../Button/Button";
import { tasksReducer } from "../../store/Tasks/TaskSlice";
import { useState } from "react";
import style from './Task.module.scss';

type Props = {  
  text: string; 
  id: string; 
  ind: number;
}

export const Task = ({text, id, ind}: Props) => {
  const tasksList = useAppSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  const [isFinish, setIsFinish] = useState(false);  

  const handleClickDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {    
    const newTask = tasksList.filter(item => item.id !== id)
    dispatch(tasksReducer.actions.deleteTask(newTask));        
  }

  const handleClickFinish = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    setIsFinish(!isFinish);
    // dispatch(tasksReducer.actions.finishTask({id, isFinish: !isFinish}));
  }
  return (
    <tr>
      <th scope="row">{ind}</th>
      {isFinish ? (<td className={style.td_through}>{text}</td>) : (<td>{text}</td>)}      
      <td>В процессе</td>
      <td>
        <Button
          clName='btn btn-danger'
          text='Удалить'
          type='button'
          func={handleClickDelete}/>      
      </td>
      <td>
        <Button
          clName='btn btn-primary'
          text='Завершить'
          type='button'
          func={handleClickFinish}/>
      </td>
    </tr>
    
  )
}

// type Props1 = {
//     text1: string;
//     key1: string
// }
// export const Task1 = (props: Props1) => {
//   console.log('props: ', props);
//   return (
//     <p>RRRRRRR</p>
//   )
// }