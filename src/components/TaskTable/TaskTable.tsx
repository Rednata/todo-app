import { useAppSelector } from '../../hooks';
import { Task } from '../Task/Task';
import style from './TaskList.module.scss';

type Props = {  
  clName: string;  
}

export const TaskTable = ({ clName }: Props) => {
  const tasksList = useAppSelector(state => state.tasks.tasks);
  console.log('tasksList: ', tasksList);

    
  return (    
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Задача</th>
          <th scope="col">Статус</th>
          <th colSpan={2} scope="col">Действия</th>          
        </tr>
      </thead>
      <tbody>
        {!!tasksList.length && (
          tasksList.map( item => (
          <Task text={item.value} key={item.id} id={item.id} />))
        )}
      </tbody>
    </table>

  )
}

{/* <Task text='Купить слона'/>
<Task text='Помыть кота'/> */}