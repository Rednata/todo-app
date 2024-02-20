import { Button } from "../Button/Button";

type Props = {  
  text: string;
}

export const Task = ({text}: Props) => {
  console.log();
  return (
    <tr>
      <th scope="row">1</th>
      <td>{text}</td>
      <td>В процессе</td>
      <td>
        <Button clName='btn btn-danger' text='Удалить'/>      
      </td>
      <td>
        <Button clName='btn btn-primary' text='Завершить'/>
      </td>
    </tr>
    
  )
}