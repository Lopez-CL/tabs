import React from 'react'
const Results = (props) => {
    const {tabs, currentTabIdx} = props;
    // const getSelectedTab = tabs.filter((tab, index)=>(
    //     currentTabIdx === index
    // ))
    return (
        <div className='card'>
            {tabs[currentTabIdx].content}
        </div>
    )
}

export default Results