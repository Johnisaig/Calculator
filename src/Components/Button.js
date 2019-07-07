import React from 'react';
import '../Styles/Button.css';


const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
};

const Button = props => (
    <div
        onClick={() => props.handleClick(props.children)}
        className={`button-wrapper ${
            isOperator(props.children) ? null : "operator"
    }`}>
        {props.children}     
    </div>
);


export default Button;