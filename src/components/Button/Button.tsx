
type Func = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

type Props = {
  clName: string;
  text: string;
  type: 'submit' | 'button';
  func?: Func;
  disabled?: boolean;
}

export const Button = ({clName, text, type, disabled, func}: Props) => {

  return (
    <button
      className={clName}
      onClick={func}
      type={type}      
      disabled={disabled}
      >{text}
    </button>
  )
}