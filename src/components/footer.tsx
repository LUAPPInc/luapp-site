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
      {/* The core Firebase JS SDK is always required and must be listed first */}
      <script src='/__/firebase/7.0.0/firebase-app.js' />

      {/* TODO: Add SDKs for Firebase products that you want to use
        https://firebase.google.com/docs/web/setup#available-libraries */}
      <script src='/__/firebase/7.0.0/firebase-analytics.js' />

      {/* Initialize Firebase */}
      <script src='/__/firebase/init.js' />
    </footer>
  )
}

export default Footer