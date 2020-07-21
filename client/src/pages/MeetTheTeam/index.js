import React from 'react'
import { Container, Row, Col } from 'react-materialize'
import 'materialize-css'

function MeetTheTeam () {
  return (
    <Container>
        <h1>Meet the Team</h1>
        <Row>
            <Col s={12} m={6}>
                <h1>Alex Bailon</h1>
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
                <h1>Garrett Gassensmith</h1>
                <img src=''/>
                <p>
                    
                </p>
            </Col>    
        </Row>
        <Row>
            <Col s={12} m={6}>
                <h1>Mohmed Vaid</h1>
                <img src=''/>
                <p>
                    
                </p>
            </Col>
            <Col s={12} m={6}>
                <h1>Rachel Levy</h1>
                <img src=''/>
                <p>
                        
                </p>  
            </Col>    
        </Row>

    </Container>
  )
}

export default MeetTheTeam
