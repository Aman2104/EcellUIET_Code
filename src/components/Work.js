import React from 'react'
import '../styles/work.css'
import WorkItem from './WorkItem'
function Work(props) {
    return (
        <section className="benefits" id="work">
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="row justify-content-center">
                    {props.workJSon.map((element) => {
                        return <WorkItem icon={element.icon} key={element.icon} statement={element.name} />
                    })}
                </div>
            </div>
        </section>
    )
} 

export default Work
