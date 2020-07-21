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
                <img src=''/>
                <p>

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
