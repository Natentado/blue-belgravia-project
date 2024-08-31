import { InputHTMLAttributes } from "react";
import style from "./style.module.scss";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    className?: string,
};

const Input = ({label, className, ...rest}: IInput) => {

    return (
        <label 
            className={`${style.inputContainer} ${className??""}`}
            htmlFor={`${rest.id}-input`}
        >
            {label??""}
            <input
                {...rest}
            />
        </label>
    );
};

export default Input;