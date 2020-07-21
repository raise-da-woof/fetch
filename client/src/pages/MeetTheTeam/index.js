import React from 'react'
import { Container, Row, Col } from 'react-materialize'
import 'materialize-css'

function MeetTheTeam () {
  return (
    <Container>
        <h1>Meet the Team</h1>
        <Row>
            <Col s={12} m={6}>
                <h2>Alex Bailon</h2>
                <img src='https://avatars2.githubusercontent.com/u/59755671?s=460&u=283873d7bfe90d9df1d3dd5afd5ed79d23e9c73e&v=4'/>
                <p>
                Full-Stack Web Developer with a background in customer service ensuring 
                that customers are always fully satisfied with the product and service 
                they receive. Recently earned a certificate in Full Stack  Development 
                from Northwestern University, with developed skills in JavaScript, node.js,  
                React.js, and responsive web design. Having analytical problem solving skills 
                and adaptableness, works alongside a team to efficiently create and develop 
                mobile-first applications.
                </p>
                <p>
                    LinkedIn: <a href="https://www.linkedin.com/in/alex-bailon/">Alex Bailon</a>
                </p>
                <p>
                    GitHub: <a href="https://github.com/Alex-Bailon">Alex-Bailon</a>
                </p>
            </Col>
            <Col s={12} m={6}>
                <h2>Garrett Gassensmith</h2>
                <img src='https://media-exp1.licdn.com/dms/image/C4E03AQGZQIHB0TAFXw/profile-displayphoto-shrink_400_400/0?e=1600905600&v=beta&t=APDwjH-ToW9oYXyam5SbCC4ni_l9vuALlSZlxyQlZPo'/>
                <p>
                Full-Stack Web Developer with a background in video production and digital media.
                 Interested in development challenges that require strategic problem-solving and 
                 foster new learning experiences.
                </p>
                <p>
                    LinkedIn: <a href="https://www.linkedin.com/in/garrett-gassensmith-5ab01880/">Garrett Gassensmith</a>
                </p>
                <p>
                    GitHub: <a href="https://github.com/gmg300">Garrett-Gassensmith</a>
                </p>
            </Col>    
        </Row>
        <Row>
            <Col s={12} m={6}>
                <h2>Mohmed Vaid</h2>
                <img src='https://avatars2.githubusercontent.com/u/59095556?s=400&u=9472624d2c71702c343c9fb415622e93addc64a5&v=4'/>
                <p>
                    
                </p>
                <p>
                LinkedIn: <a href="https://www.linkedin.com/in/mohmedvaid/">Mohmed Vaid</a>

                </p>
                <p>
                    GitHub: <a href="https://github.com/Mohmedvaid">Mohmed-Vaid</a>
                </p>

            </Col>
            <Col s={12} m={6}>
                <h2>Rachel Levy</h2>
                <img src=''/>
                <p>
                        
                </p>  
            </Col>    
        </Row>

    </Container>
  )
}

export default MeetTheTeam
