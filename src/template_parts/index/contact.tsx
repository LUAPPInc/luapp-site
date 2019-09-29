import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TextField, {HelperText, Input} from '@material/react-text-field'

interface Props {}

const Contact = ({}: Props) => {
  return (
    <div
      className='contact'
      id='contato'
    >
      <Container>
        <Row>
          <Col lg='12' className='align-self-start'>
            <h2>
              Contato
            </h2>
          </Col>
          <Col lg='12' className='align-self-center'>
            <form>
              <div
                className='wrapper-input'
              >
                <label>
                  Nome
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  required
                />
              </div>
              <div
                className='wrapper-input slice'
              >
                <label>
                  Email
                </label>
                <input
                  type='text'
                  name='email'
                  id='email'
                  required
                />
              </div>
              <div
                className='wrapper-input slice'
              >
                <label>
                  Assunto
                </label>
                <input
                  type='text'
                  name='subject'
                  id='subject'
                />
              </div>
              <div
                className='wrapper-input'
              >
                <label>
                  Mensagem
                </label>
                <textarea
                  name='message'
                  id='message'
                  required
                />
              </div>
              <div className='wrapper-submit'>
                <button
                  type='submit'
                >
                  Enviar
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact