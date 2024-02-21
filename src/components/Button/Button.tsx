
type Func = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

type Props = {
  clName: string;
  text: string;
  func: Func;
}

export const Button = ({clName, text, func}: Props) => {
  return (
    <button
      className={clName}
      onClick={func}
      >{text}
    </button>
  )
}