import React from 'react'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import AnchorLink from 'react-anchor-link-smooth-scroll'
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
            <AnchorLink href='#home'>
              Ínicio
            </AnchorLink>
            <AnchorLink href='#sobre'>
              Luapp
            </AnchorLink>
            <AnchorLink href='#servicos'>
              Serviços
            </AnchorLink>
            <AnchorLink href='#clientes'>
              Clientes
            </AnchorLink>
            <AnchorLink href='#contato'>
              Contato
            </AnchorLink>
          </Nav>
          </Navbar.Collapse>
          <Navbar.Brand>
            <AnchorLink href='#home'>
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
      </Navbar>
    </header>
  )
}

export default Header