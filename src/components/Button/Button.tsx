
type Props = {
  clName: string;
  text: string;
}

export const Button = ({clName, text}: Props) => {
  console.log(clName);
  return (
    <button className={clName}>{text}</button>
  )
}