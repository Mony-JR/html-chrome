import React, { useContext } from 'react';
import { Get_data } from '../App';

const Button = () => {
    const { JJ,update } = useContext(Get_data);
    return (
        <div className='fixed bottom-5 left-5'>
            <button onClick={JJ}> {update ? 'Upate': 'CREATE'}</button>
        </div>
    );
};

export default Button;
