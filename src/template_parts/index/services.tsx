import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

interface Props {}

const Services = ({}: Props) => {
  return (
    <div
      className='services'
      id='servicos'
    >
      <Container>
        <Row>
          <Col lg='12' className='align-self-start'>
            <h2>
              Serviços.
              <span>
                consultoria e desenvolvimento:
              </span>
            </h2>
          </Col>
          <Col lg='12' className='align-self-center'>
            <h2>
              Sistemas, Sites e Infraestruturas
            </h2>
          </Col>
          <Col md='12' lg='4' className='align-self-end'>
            <p>
              Eiiitaaa Mainhaaa!! Esse Lorem ipsum é só na sacanageeem!! E que abundância meu irmão viuu!! Assim você vai matar o papai.
            </p>
          </Col>
          <Col md='12' lg='4' className='align-self-end'>
            <p>
              Eiiitaaa Mainhaaa!! Esse Lorem ipsum é só na sacanageeem!! E que abundância meu irmão viuu!! Assim você vai matar o papai.
            </p>
          </Col>
          <Col md='12' lg='4' className='align-self-end'>
            <p>
              Eiiitaaa Mainhaaa!! Esse Lorem ipsum é só na sacanageeem!! E que abundância meu irmão viuu!! Assim você vai matar o papai.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Services