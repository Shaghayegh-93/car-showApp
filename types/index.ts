export interface CustomeButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit" | "reset";
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}
