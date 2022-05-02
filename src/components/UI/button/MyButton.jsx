import React from 'react';
import cs from './MyButton.module.css';

const MyButton = ({children,...props}) => {
    return (
        <button {...props} className={cs.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;