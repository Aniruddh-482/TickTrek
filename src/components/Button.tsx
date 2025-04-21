import React from "react";

import ButtonProps from "../types/button";

const Button: React.FC<ButtonProps> = (props) => {
    return (
        // TODO: Replace with actual logic later
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={props.onClick}>
            {props.label}
        </button>
    );
};

export default Button;