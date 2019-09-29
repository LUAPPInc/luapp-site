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
      </Navbar>
    </header>
  )
}

export default Header