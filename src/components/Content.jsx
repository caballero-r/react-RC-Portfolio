// Import Required
import React from 'react';
import { useState } from 'react';
import Navi from './Navi';
import About from './Pages/About';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';

// Content component
function Content () {

    // Page Display
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Project') {
            return <Project />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }

    }

    // Page Change
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navi currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}

export default Content;