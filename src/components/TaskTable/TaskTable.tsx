import { useAppSelector } from '../../hooks';
import { Task } from '../Task/Task';

export const TaskTable = () => {
  const tasksList = useAppSelector(state => state.tasks.tasks);

  return (        
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">Задача</th>
            <th scope="col">Статус</th>
            <th scope="col">Действия</th>          
          </tr>
        </thead>
        <tbody>
          {!!tasksList.length && (
            tasksList.map((item, ind) => (
            <Task
              text={item.value}
              finish={item.finish}
              importance={item.importance}
              id={item.id}
              ind={ind + 1}
              key={item.id}
            />))
          )}
        </tbody>
      </table>        
    </div>
      
  )
}
