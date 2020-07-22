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
                <img className='imgCenter' src='https://avatars2.githubusercontent.com/u/59755671?s=300&u=283873d7bfe90d9df1d3dd5afd5ed79d23e9c73e&v=4'/>
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
                <img className='imgCenter' src='https://avatars3.githubusercontent.com/u/25697564?s=350&u=c5041af11c759c761e91263609ae183b44611fdf&v=4'/>
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
                <img className='imgCenter' src='https://avatars2.githubusercontent.com/u/59095556?s=350&u=9472624d2c71702c343c9fb415622e93addc64a5&v=4'/>
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
                <img className='imgCenter' src='https://avatars1.githubusercontent.com/u/57646446?s=350&u=9e4b0f37e8ba3ebad64f87810ae0edebada358c8&v=4'/>
                <p>
                Full Stack Web-Developer with a background in social media managing/marketing, 
                content development, web design, and tracking social traffic. Over the years I 
                have accumulated an abundance of knowledge through internships, jobs, and freelance 
                to help me acquire even more background on certain areas. Working for startups has 
                given me an advantage to bring a creative outlook and perspective on the business 
                structure. Understanding computer science not only makes me more credible and more 
                of an asset, I have able to bring my creative ideas to life. I am excited to see 
                where this journey will take me.     
                </p>  
                <p>
                    LinkedIn: <a href="https://www.linkedin.com/in/rachel-levy-416427151/">Rachel Levy</a>
                </p>
                <p>
                    GitHub: <a href="https://github.com/rwillowlevy">Rachel-Levy</a>
                </p>
            </Col>    
        </Row>

    </Container>
  )
}

export default MeetTheTeam
