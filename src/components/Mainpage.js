import React from 'react'
import Work from './Work'
function Mainpage() {
    const benefitJSon = [{ "name": "Accelerate your idea", "icon": "fa-tachometer-alt", "statement": "Our program is designed to help you speed up the process of developing and launching your idea." }, { "name": "Interactions with successful entrepreneurs", "icon": "fa-users", "statement": "Get the opportunity to interact with successful entrepreneurs who can share their experiences and insights with you." }, { "name": "Mentorship by experts", "icon": "fa-chalkboard-teacher", "statement": "Our experienced mentors will guide and support you through every step of your entrepreneurial journey." }, { "name": "Monetary support", "icon": "fa-money-bill-wave", "statement": "We provide financial support to help you fund your idea and bring it to life." }, { "name": "Converting Idea into business models", "icon": "fa-chart-line", "statement": "We'll help you turn your idea into a viable and sustainable business model that can succeed in the marketplace." }, { "name": "Linking startups and budding entrepreneurs in an informal way.", "icon": "fa-link", "statement": "We connect startups and entrepreneurs in an informal and collaborative environment where they can share ideas and support each other." }, { "name": "Providing a platform for turning your ideas to reality", "icon": "fa-rocket", "statement": "Our platform is designed to help you turn your ideas into reality by providing the resources, support, and guidance you need to succeed." }]
    const workJSon = [  {    "name": "Ideate",    "icon": "fa-lightbulb",    "statement": "Generate new ideas and concepts",    "description": "Brainstorm and create new ideas for products, services, or processes."  },  {    "name": "Innovate",    "icon": "fa-cogs",    "statement": "Implement new ideas and concepts",    "description": "Bring new ideas to life through research, development, and implementation."  },  {    "name": "Incubate",    "icon": "fa-rocket",    "statement": "Nurture early-stage startups",    "description": "Provide support, resources, and guidance to help startups grow and succeed."  }]


    return (
 
        <div>
            <Work workJSon = {workJSon} heading="Our work"/>
            <Work workJSon = {benefitJSon} heading="Benefits"/>
        </div>
    )
}

export default Mainpage
