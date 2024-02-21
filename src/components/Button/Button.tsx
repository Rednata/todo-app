
type Props = {
  clName: string;
  text: string;
}

export const Button = ({clName, text}: Props) => {
  return (
    <button className={clName}>{text}</button>
  )
}