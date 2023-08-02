// Import Required
import React from 'react';

// About component
function About () {
    return (
        <div className='container text-center'>
            <h1>Welcome to my dev portfolio!</h1>
            <div className='row align-items-center'>
                <div className='col'>
                    <img src="./profile.jpg" className='img-fluid rounded-5' alt="" />
                </div>
                <div className='col'>
                    <h2>About Me</h2>
                
                   <p>
                    If there's one thing that defines me, it's my curiosity and passion for discovering new horizons. As an aspiring software developer, I bring a wealth of experience from diverse industries, fuelled by my love of technology, physics, and tackling complex challenges through collaboration. 
My journey began with a fascination for the laws that govern our universe, leading me to pursue a Bachelor's degree in Physics. This rigorous academic pursuit shaped my analytical thinking, problem-solving and adaptability skills, while developing my resilience.  
                    </p>
                </div>
             </div>

        </div>
    );
};

export default About;