import React from 'react'
import '../styles/work.css'
function Work() {
  return (
    <section className="benefits" id="work">
        <div className="container">
            <h2>Our Work in Institute</h2>
            <div className="row justify-content-center">
                <div className="benefit-box">
                    <i className="fas fa-lightbulb"></i>
                    <h3>Ideate</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum tristique sapien vel
                        laoreet.</p>
                </div>

                <div className="benefit-box">
                    <i className="fas fa-brain"></i>
                    <h3>Innovate</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum tristique sapien vel
                        laoreet.</p>
                </div>

                <div className="benefit-box">
                    <i className="fas fa-building"></i>
                    <h3>Incubate</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum tristique sapien vel
                        laoreet.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Work
