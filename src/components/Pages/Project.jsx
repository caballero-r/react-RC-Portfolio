// Import Required
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaGithub } from 'react-icons/fa';
import { GoRocket } from "react-icons/go";

// Project component
function Project () {
    return (
        <Container>
            <h1>View my Projects!</h1>
            <h4>Click on the GitHub icon to view the repository</h4>
            <h4>Click the rocket to view the deployed webpage</h4>
            <Row className='project-row'>
                <Col>
                <Card style={{ width: '25rem' }}>
                    <Card.Img src="barFly.png" />
                    <Card.Body>
                        <Card.Title>BarFly</Card.Title>
                        <Card.Text>
                        Explore Canada's vibrant cocktail scene with top-50-best-bars-canada, a comprehensive guide to the top 50 cocktail bars, as voted in 2023.
                        </Card.Text>
                        <a href='https://github.com/caballero-r/BarFly' >
                            <FaGithub size={25} /> 
                        </a>
                        <a href='https://bar-fly-1ce0c9bdfc9c.herokuapp.com/' >
                            <GoRocket size={25} /> 
                        </a>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '25rem' }}>
                    <Card.Img src="jate.png"/>
                    <Card.Body>
                        <Card.Title>J.A.T.E: Just Another Text Editor</Card.Title>
                        <Card.Text>
                        This text editor allows you use this application both online and offline! So go ahead and install this app on your device and use it anywhere!
                        </Card.Text>
                        <a href='https://github.com/caballero-r/J.A.T.E-Just-Another-Text-Editor' >
                            <FaGithub size={25}/>
                        </a>
                        <a href='https://justanothertexteditor-jate-61acdd82d804.herokuapp.com/' >
                            <GoRocket size={25} /> 
                        </a>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '25rem' }}>
                    <Card.Img src="pokemon.png" />
                    <Card.Body>
                        <Card.Title>Pokémon Companion</Card.Title>
                        <Card.Text>
                        Want to learn more about a Pokémon? Search for it and get all the information you need! 
                        </Card.Text>
                        <a href='https://github.com/caballero-r/Pokemon-Companion' >
                            <FaGithub size={25}/>
                        </a>
                        <a href='https://caballero-r.github.io/Pokemon-Companion/' >
                            <GoRocket size={25} /> 
                        </a>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            <Row className='project-row'>
            <Col>
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src="password.png"/>
                    <Card.Body>
                        <Card.Title>Password Generator</Card.Title>
                        <Card.Text>
                        Can't think of a password? Let this application do it for you!
                        </Card.Text>
                        <a href='https://github.com/caballero-r/Unique-Password-Generator' >
                            <FaGithub size={25}/>
                        </a>
                        <a href='https://caballero-r.github.io/Unique-Password-Generator/' >
                            <GoRocket size={25} /> 
                        </a>
                    </Card.Body>
                </Card>
                </Col>    
            <Col>
                <Card style={{ width: '25rem' }}>
                    <Card.Img src="Home.png" />
                    <Card.Body>
                        <Card.Title>Note Taker</Card.Title>
                        <Card.Text>
                        Take Notes and save them for later! Simple to use and easy to navigate! 
                        </Card.Text>
                        <a href='https://github.com/caballero-r/Note-Taker' >
                            <FaGithub size={25}/>
                        </a>
                        <a href='https://pacific-escarpment-67411-f29e1763a0f7.herokuapp.com/' >
                            <GoRocket size={25} /> 
                        </a>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src="planner.png" />
                    <Card.Body>
                        <Card.Title>Work Day Planner</Card.Title>
                        <Card.Text>
                        Tackle the day's tasks with this easy to use planner!
                        </Card.Text>
                        <a href='https://github.com/caballero-r/Scheduling-Your-Work-Day' >
                            <FaGithub size={25}/>
                        </a>
                        <a href='https://caballero-r.github.io/Scheduling-Your-Work-Day/' >
                            <GoRocket size={25} /> 
                        </a>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Project;