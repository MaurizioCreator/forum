import React ,{useState} from 'react';
import MyInput from "./UI/input/MyInput";

const RelatedComponent = () => {
    const [value, setValue] = useState('Текст')
    return (
        <div>
            <h1>{value}</h1>
            <MyInput
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    );
};

export default RelatedComponent;