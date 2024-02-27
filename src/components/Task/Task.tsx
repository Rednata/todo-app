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
  importance: string;
}

export const Task = ({text, id, ind, finish, importance}: Props) => {
  const dispatch = useDispatch();
  const tasksList = useAppSelector(state => state.tasks.tasks);
  const [editValue, setEditValue] = useState(text);
  const [isFinish, setIsFinish] = useState(finish);
  const textInputRef = useRef<(HTMLInputElement)>(null);  

  const handleClickDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {    
    const confirmDel = window.confirm('Вы точно хотите удалить задачу?')
    if (confirmDel) {
      const newTaskList = tasksList.filter(item => item.id !== id)      
      dispatch(tasksReducer.actions.updateTask(newTaskList));              
    }    
  }

  const handleClickFinish = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    setIsFinish(!isFinish);        
    const newTaskList = tasksList.map(item => {
      if (item.id === id) {
        item = {...item, finish: !isFinish}
      }
        return item
    })
    dispatch(tasksReducer.actions.updateTask(newTaskList));
  }

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();  
    const newTaskList = tasksList.map(item => {
      if (item.id === id) {
        item = {...item, value: editValue}
      }
      return item;
    })      
    dispatch(tasksReducer.actions.updateTask(newTaskList));
    textInputRef.current?.blur()
  }

  const handleClickEdit = () => {
    textInputRef.current?.focus();
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {            
    setEditValue(e.target.value)
    // console.log(editValue);
  }

  return (
    <tr >
      <th scope="row">{ind}</th>                              
      <td className={style.tr_form}>
        <form className={style.form} onSubmit={handleSubmit}>
          {
            finish ? (
              <>
              <input
                className={`${style.td_through}`}                               
                type="text"
                value={editValue}
                ref={textInputRef}     
                onChange={handleChange}
              />
              <span className={style[importance]}></span>
              </>              
              ) : ( 
                <> 
                <input                  
                  className={style.td_input}                               
                  type="text"
                  value={editValue}
                  ref={textInputRef}     
                  onChange={handleChange}
                />
                <span className={style[importance]}></span>
                </>                
              )
          }
        </form>
      </td>
      <td>В процессе</td>
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
