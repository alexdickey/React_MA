import React, { useState} from 'react';
import './App.css'
import ChildComponent from './childComponent';

const ParentComponent = () => {
    const[blackCellCount, setBlackedCellCount] = useState(0);

    const updateBlackCellCount = (isBlack) => {
        if (isBlack) {
            setBlackedCellCount((prevCount) => prevCount + 1);
        } else {
            setBlackedCellCount((prevCount) => prevCount - 1);
        }
    };

    return (
            <div>
                <h1>Count: {blackCellCount} </h1>
                <div className='grid-container'>
                    <ChildComponent onClick={updateBlackCellCount}/>
                    <ChildComponent onClick={updateBlackCellCount}/>
                    <ChildComponent onClick={updateBlackCellCount}/>
                    <ChildComponent onClick={updateBlackCellCount}/>
                </div>
            </div>
    );
};

export default ParentComponent;