import React from 'react'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import luappSvg from '../images/luapp_white.svg'

interface Props {}

const Header = ({}: Props) => {
  return (
    <header
      className='header'
    >
      <Navbar expand='lg' variant='dark'>
        <Container>
          <Navbar.Toggle aria-controls='navbar-nav' />
          <Navbar.Collapse id='navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/#home'>
              Ínicio
            </Nav.Link>
            <Nav.Link href='/#sobre'>
              Luapp
            </Nav.Link>
            <Nav.Link href='/#servicos'>
              Serviços
            </Nav.Link>
            <Nav.Link href='/#clientes'>
              Clientes
            </Nav.Link>
            <Nav.Link href='/#contato'>
              Contato
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href='/#home'>
            <figure>
              <img 
                src={luappSvg}
                alt='Lunnar Applications'
                title='Lunnar Applications'
                className='img-fluid'
              />
            </figure>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header