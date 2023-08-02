// Import Required
import React from 'react';

// Navi component
function Navigation ({ currentPage, handlePageChange}) {
    return (
        <ul className='nav justify-content-end'>  
            <li className='nav-item'>
                <a 
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} 
                href='#aboutMe'
                onClick={() => handlePageChange('About')}
                >
                About Me
                </a>
            </li>
            <li className='nav-item'>
                <a 
                className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'} 
                href='#project'
                onClick={() => handlePageChange('Project')}
                >
                Projects
                </a>
            </li>
            <li className='nav-item'>
                <a 
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
                href='#contactMe'
                onClick={() => handlePageChange('Contact')}
                >
                Contact Me
                </a>
            </li>
            <li className='nav-item'>
                <a 
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} 
                href='#resume'
                onClick={() => handlePageChange('Resume')}
                >
                Resume
                </a>
            </li>
        </ul>
    );
}

export default Navigation;