import React from 'react'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import luappSvg from '../images/luapp_white.svg'

interface Props {
  is404?: boolean
}

const Header = ({ is404 = false }: Props) => {

  let menu = (
    <Container>
      <Navbar.Toggle aria-controls='navbar-nav' />
      <Navbar.Collapse id='navbar-nav'>
      <Nav className='mr-auto'>
        <AnchorLink offset='71' href='#home'>
          Ínicio
        </AnchorLink>
        <AnchorLink offset='71' href='#sobre'>
          Luapp
        </AnchorLink>
        <AnchorLink offset='71' href='#servicos'>
          Serviços
        </AnchorLink>
        <AnchorLink offset='71' href='#clientes'>
          Clientes
        </AnchorLink>
        <AnchorLink offset='71' href='#contato'>
          Contato
        </AnchorLink>
      </Nav>
      </Navbar.Collapse>
      <Navbar.Brand>
        <AnchorLink offset='71' href='#home'>
          <figure>
            <img 
              src={luappSvg}
              alt='Lunnar Applications'
              title='Lunnar Applications'
              className='img-fluid'
            />
          </figure>
        </AnchorLink>
      </Navbar.Brand>
    </Container>
  )
  if (is404) {
    menu = (
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
    )
  }

  return (
    <header
      className='header'
    >
      <Navbar expand='lg' variant='dark'>
        {menu}  
      </Navbar>
    </header>
  )
}

export default Header