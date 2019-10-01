import React from 'react'
import emailjs from 'emailjs-com'
import $ from 'jquery'
import { Container, Row, Col } from 'react-bootstrap'

interface Props {}

const Contact = ({}: Props) => {

  const onSubmit = (event: any) => {
    event.preventDefault()
    let spam = false
    const form = $('form#' + event.target.id)
    const params = form.serializeArray().reduce((obj: any, item: any) => {
      if (item.name === 'gotcha' && item.value && item.value.length > 0) {
        spam = true
      }
      obj[item.name] = item.value
      return obj
   }, {})
 
   if (!spam) {
    const service_id = 'sendgrid'
    const user_id = 'user_97gnPFSE1VLzxx4xwW0yA'
    const template_id = 'template_ppMLrAK6'
    form.find('button').text('Enviando...')
    emailjs.send(service_id, template_id, params, user_id)
      .then(() => { 
          form.find('button').text('Enviado!')
          setTimeout(() => {
            // @ts-ignore
            form[0].reset()
            form.find('button').text('Enviar')
          }, 1500)
        }, (err: any) => {
          form.find('button').text('Erro ao enviar, tente novamente mais tarde.')
          console.error(JSON.stringify(err))
          setTimeout(() => {
            form.find('button').text('Enviar')
        }, 1500)
      })
    }
  }

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
            <form
              id='contact-form'
              onSubmit={onSubmit}
            >
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
                  required={true}
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
                  required={true}
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
                  required={true}
                />
              </div>
              <input
                type='text'
                id='gotcha'
                name='gotcha'
                style={{ display: 'none' }}
              />
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