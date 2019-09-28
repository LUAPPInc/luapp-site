import React from 'react'
import { Container, Row, Col } from "react-bootstrap"

interface Props {}

const Footer = ({}: Props) => {
  return (
    <footer className='footer'>
      <Container>
        <p>
          &copy; {new Date().getFullYear()}. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  )
}

export default Footer