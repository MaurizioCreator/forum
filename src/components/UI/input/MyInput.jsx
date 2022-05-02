import React from 'react';
import cs from './MyInput.module.css'

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input  ref={ref} className={cs.myInput} {...props} />
    );
});

export default MyInput;