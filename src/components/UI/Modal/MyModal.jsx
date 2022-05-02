import React from 'react';
import cs from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [cs.myModal];

    if (visible) {
        rootClasses.push(cs.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cs.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;