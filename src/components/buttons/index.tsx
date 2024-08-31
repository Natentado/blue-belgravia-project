"use client";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    size?: "xl" | "x" | "l" | "m" | "s";
    radius?: "full" | "6x" | "4x" | "2x" | "1x"
}

const Button = ({className, ...props}: IButton) => {

    return (
        <>
            <button
                className={`${className??""}`}
                {...props}
            >
            </button>
        </>
    )
};

export default Button;