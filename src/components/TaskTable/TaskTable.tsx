import { Task } from '../Task/Task';
import style from './TaskList.module.scss';

type Props = {  
  clName: string;  
}

export const TaskTable = ({ clName }: Props) => {
  console.log(clName);
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
        <Task text='Купить слона'/>
        <Task text='Помыть кота'/>

      </tbody>
    </table>

  )
}