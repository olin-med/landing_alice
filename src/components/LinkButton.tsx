import React from "react";

type ButtonProps = {
    id?: string;
    className?: string;
    type?: "button" | "submit" | "reset";
    link?: string;
    children: React.ReactNode;
};
const Button: React.FC<ButtonProps> = ({
    id,
    className = "",
    type = "button",
    link,
    children,
    
}) => {

    const handleClick = () => {
        window.open(
        link,
        '_blank',
        'noopener,noreferrer'
        );
    };

    return (
        <button
            id={id}
            type={type}
            className={`bg-[#E424A4] cursor-pointer text-white font-bold py-4 px-6 rounded hover:bg-pink-600 ${className}`}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}
export default Button;