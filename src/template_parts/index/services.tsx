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
              Serviços
              {/* <span>
                consultoria e desenvolvimento:
              </span> */}
            </h2>
          </Col>
          <Col lg='12' className='align-self-center'>
            <h2>
              Sistemas a Apps, Sites e Infraestrutura
            </h2>
          </Col>
          <Col md='12' lg='4' className='align-self-end'>
            <p>
              De pequenos MVPs a grandes produtos, analisamos a necessidade do seu negocio e oferecemos uma solução personalizada para automatizar e tornar seus processos mais eficientes, seguindo as definições que mais importam: as suas!
            </p>
          </Col>
          <Col md='12' lg='4' className='align-self-end'>
            <p>
              A porta de entrada para qualquer empresa hoje em dia é através da web. Deixe a sua marca registrada no mundo digital através de sites personalizados.
            </p>
          </Col>
          <Col md='12' lg='4' className='align-self-end'>
            <p>
              Nem só de software vive um produto. Temos uma gama de profissionais especializados em infraestrutura que vão fazer o seu produto ou solução estarem prontas para a era da Internet.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Services