import React, { useState } from 'react';
import './App.css'

const ChildComponent = ({ onClick }) => {
    const [isBlack, setIsBlack] = useState(false);

    const changeColor = () => {
        setIsBlack(!isBlack);
        onClick(!isBlack);
    }  

    return (
    <div className={`box ${isBlack ? 'black' : 'white'}`} onClick={changeColor}></div>
    );
};

export default ChildComponent;
