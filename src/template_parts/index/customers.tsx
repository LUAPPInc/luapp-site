import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

interface Props {}

const Customers = ({}: Props) => {
  return (
    <div
      className='customers'
      id='#servicos'
    >
      <Container>
        <Row>
          <Col lg='12' className='align-self-start'>
            <h2>
              Os Clientes.
              <span>
                todos tem 19
              </span>
            </h2>
          </Col>
          <Col lg='12' className='align-self-center'>
            
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Customers