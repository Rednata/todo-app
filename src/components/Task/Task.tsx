import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks";
import { Button } from "../Button/Button";
import { tasksReducer } from "../../store/Tasks/TaskSlice";
import { useEffect, useRef, useState } from "react";
import style from './Task.module.scss';

type Props = {  
  text: string; 
  id: string; 
  ind: number;
  finish: boolean;
}

export const Task = ({text, id, ind, finish}: Props) => {
  const tasksList = useAppSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  const [editValue, setEditValue] = useState(text);
  const textInputRef = useRef<(HTMLInputElement)>(null);

  const [isFinish, setIsFinish] = useState(finish);  

  const handleClickDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {    
    const confirmDel = window.confirm('Вы точно хотите удалить задачу?')
    if (confirmDel) {
      const newTaskList = tasksList.filter(item => item.id !== id)      
      dispatch(tasksReducer.actions.updateTask(newTaskList));              
    }    
  }

  const handleClickFinish = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    
    setIsFinish(!isFinish);
    console.log(isFinish);
    
        
    const newTaskList = tasksList.map(item => {
      if (item.id === id) {
        item = {...item, finish: !isFinish}
      }
        return item
    })
    dispatch(tasksReducer.actions.updateTask(newTaskList));
  }

  const handleSubmit1 = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();  
  }

  const handleClickEdit = () => {
    console.log('edit');
    textInputRef.current?.focus();

    // if (textInputRef instanceof HTMLElement) {
    //   console.log(typeof textInputRef);
    // }    
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {    
    // setEditValue(e.target.value)
    // console.log(editValue);
  }

  return (
    <tr className={style.tr_form}>
      <th scope="row">{ind}</th>
      {(finish )? (
        <>
          <td >
            <form action=""
              onSubmit={handleSubmit1}
            >
                <input
                  className={style.td_through}                               
                  type="text"
                  value={editValue}
                  ref={textInputRef}     
                  onChange={handleChange}
                />
              </form>
            {/* {text} */}
          </td>
          <td>Выполнена</td>
        </>        
        ) : (
          <> 
            <td
              className={style.task}                            
            >
              <form action="">
                <input
                  className={style.td_input}   
                  type="text"
                  value={editValue}
                  ref={textInputRef}     
                  onChange={handleChange}
                />
              </form>

              {/* {text} */}
            </td>
            <td>В процессе</td>
          </>        
        )}      
      
      <td className={style.actionBtnWrap}>
        <Button
          clName='btn btn-danger'
          text='Удалить'
          type='button'
          func={handleClickDelete}/>      

        <Button
          clName='btn btn-primary'
          text='Завершить'
          type='button'
          func={handleClickFinish}/>

        <Button
          clName='btn btn-secondary'
          text='Редактировать'
          func={handleClickEdit}
          type='button'
        />   
      </td>
    </tr>
    
  )
}
