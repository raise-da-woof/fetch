import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col, Card, Icon, CardTitle } from 'react-materialize'
import API from '../../utils/API'
import store from '../../utils/store'
import { addAuth } from '../../utils/actions'
import 'materialize-css'

function MeetTheTeam () {
  const { Auth } = store.getState()
  let history = useHistory()
  API.verifyToken(Auth)
    .then(res => {})
    .catch(err => {
      store.dispatch(addAuth(undefined))
      history.push('/')
    })
  return (
    <Container>
      <h1>Meet the Team</h1>
      <Row>
        <Col s={12} m={6}>
          <Card
            closeIcon={<Icon>close</Icon>}
            header={
              <CardTitle
                image='https://avatars2.githubusercontent.com/u/59755671?s=250&u=283873d7bfe90d9df1d3dd5afd5ed79d23e9c73e&v=4'
                reveal
              />
            }
            reveal={
              <p>
                Full-Stack Web Developer with a background in customer service
                ensuring that customers are always fully satisfied with the
                product and service they receive. Recently earned a certificate
                in Full Stack Development from Northwestern University, with
                developed skills in JavaScript, node.js, React.js, and
                responsive web design. Having analytical problem solving skills
                and adaptableness, works alongside a team to efficiently create
                and develop mobile-first applications.
              </p>
            }
            revealIcon={<Icon>more_vert</Icon>}
            title='Alex Bailon'
          >
            <p>
              LinkedIn:{' '}
              <a href='https://www.linkedin.com/in/alex-bailon/'>Alex Bailon</a>{' '}
              GitHub: <a href='https://github.com/Alex-Bailon'>Alex-Bailon</a>
            </p>
          </Card>
        </Col>
        <Col s={12} m={6}>
          <Card
            closeIcon={<Icon>close</Icon>}
            header={
              <CardTitle
                image='https://avatars3.githubusercontent.com/u/25697564?s=250&u=c5041af11c759c761e91263609ae183b44611fdf&v=4'
                reveal
              />
            }
            reveal={
              <p>
                Full-Stack Web Developer with a background in video production
                and digital media. Interested in development challenges that
                require strategic problem-solving and foster new learning
                experiences.{' '}
              </p>
            }
            revealIcon={<Icon>more_vert</Icon>}
            title='Garrett Gassensmith'
          >
            <p>
              LinkedIn:{' '}
              <a href='https://www.linkedin.com/in/garrett-gassensmith-5ab01880/'>
                Garrett Gassensmith
              </a>{' '}
              GitHub:{' '}
              <a href='https://github.com/gmg300'>gmg300</a>
            </p>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col s={12} m={6}>
          <Card
            closeIcon={<Icon>close</Icon>}
            header={
              <CardTitle
                image='https://avatars2.githubusercontent.com/u/59095556?s=250&u=9472624d2c71702c343c9fb415622e93addc64a5&v=4'
                reveal
              />
            }
            reveal={
              <p>
                I'm a Developer who loves to build software that can improve our
                everyday lives and make us more productive. I’ve taken my
                experience working with end users and now apply it to custom
                software for clients to make the most of their ideas.
              </p>
            }
            revealIcon={<Icon>more_vert</Icon>}
            title='Mohmed Vaid'
          >
            <p>
              LinkedIn:{' '}
              <a href='https://www.linkedin.com/in/mohmedvaid/'>Mohmed Vaid</a>{' '}
              GitHub: <a href='https://github.com/Mohmedvaid'>Mohmed-Vaid</a>
            </p>
          </Card>
        </Col>
        <Col s={12} m={6}>
          <Card
            closeIcon={<Icon>close</Icon>}
            header={
              <CardTitle
                image='https://avatars1.githubusercontent.com/u/57646446?s=250&u=9e4b0f37e8ba3ebad64f87810ae0edebada358c8&v=4'
                reveal
              />
            }
            reveal={
              <p>
                Full Stack Web-Developer with a background in social media
                managing/marketing, content development, web design, and
                tracking social traffic. Over the years I have accumulated an
                abundance of knowledge through internships, jobs, and freelance
                to help me acquire even more background on certain areas.
                Working for startups has given me an advantage to bring a
                creative outlook and perspective on the business structure.
                Understanding computer science not only makes me more credible
                and more of an asset, I have able to bring my creative ideas to
                life. I am excited to see where this journey will take me.
              </p>
            }
            revealIcon={<Icon>more_vert</Icon>}
            title='Rachel Levy'
          >
            <p>
              LinkedIn:{' '}
              <a href='https://www.linkedin.com/in/rachel-levy-416427151/'>
                Rachel Levy
              </a>
              GitHub: <a href='https://github.com/rwillowlevy'>Rachel-Levy</a>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default MeetTheTeam
