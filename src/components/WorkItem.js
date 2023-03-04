import React from 'react'
import '../styles/work.css'
function WorkItem(props) {
    return (
        <div className="benefit-box">
            <i className={`fas ${props.icon}`}></i>
            <h3>{props.statement}</h3>
        </div>
    )
}

export default WorkItem
 