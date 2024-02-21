import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks";
import { Button } from "../Button/Button";
import { tasksReducer } from "../../store/Tasks/TaskSlice";

type Props = {  
  text: string; 
  id: string; 
}

export const Task = ({text, id}: Props) => {
  const tasksList = useAppSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleClickDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    console.log(id);
    const newTask = tasksList.filter(item => item.id !== id)
    dispatch(tasksReducer.actions.deleteTask(newTask));        
  }

  const handleClickFinish = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    console.log('click2');
    
  }
  return (
    <tr>
      <th scope="row">1</th>
      <td>{text}</td>
      <td>В процессе</td>
      <td>
        <Button clName='btn btn-danger' text='Удалить' func={handleClickDelete}/>      
      </td>
      <td>
        <Button clName='btn btn-primary' text='Завершить' func={handleClickFinish}/>
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