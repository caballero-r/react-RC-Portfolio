// Import Required
import React from 'react';
import resume from '../../assets/resume.pdf'

// Resume component
function Resume () {
    return (
        <div className='container'>
            <h1 className='row justify-content-md-center mb-2'>Resume</h1>
            <div className=' mb-3'>
                <h3>To view a copy of my resume, click the link!</h3>
            <a href={resume}>Download My Resume</a>
            </div>
            <div className='col mb-3'>
            <h2>Front-End Proficiencies</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            </div>
            <div className='col mb-3'>
            <h2>Back-End Proficiencies</h2>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
            </div>
        </div>

    )
}

export default Resume;