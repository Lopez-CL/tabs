import { tab } from '@testing-library/user-event/dist/tab';
import React from 'react'
const Tabs = (props) => {
    const {tabs, currentTabIdx, setCurrentTabIdx} = props;
    const styleCheck = (index) =>{
        if(index === currentTabIdx){
            return "selected"
        }else{
            return "notSelected"
        }
    }
    const getIndex = (index) =>{
        setCurrentTabIdx(index);
}
    return (
        <div className='tab-holder'>
            {tabs.map((tab,index)=>(
                <div className={`tab ${styleCheck(index)}`} onClick={ (e) => getIndex(index)} >
                    {tab.label} 
                </div>
            ))}
        </div>
    )
}

export default Tabs