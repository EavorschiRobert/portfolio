export type ButtonProps = {
    text: string;
    type: 'button' | 'submit';
    style: 'primary' | 'secondary';
    clickHandler: () => void;
}
const Button = ({text, type,style, clickHandler}: ButtonProps) => {
    return (
        <button type={type} className={style} onClick={() => clickHandler()}>{text}</button>
    )
}
export default Button;