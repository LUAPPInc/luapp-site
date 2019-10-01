import React from 'react'
import { Container } from 'react-bootstrap'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import luappSvg from '../../images/luapp_purple.svg'
import phoneSvg from '../../images/phone.svg'

interface Props {}

const About = ({}: Props) => {
  return (
    <div
      className='about'
      id='sobre'
    >
      <p
        className='app'
      >
        _Desenvolvimento de aplicativos
      </p>
      <Container>
        <div className='box'>
          <div className='wrapper'>
            <div
              className='texts'
            >
              <figure>
                <img
                  title='Lunnar Applications'
                  alt='Lunnar Applications'
                  className='img-fluid'
                  src={luappSvg}
                />
              </figure>
              <p>
                Eiiitaaa Mainhaaa!! Esse Lorem ipsum é só na sacanageeem!! E que abundância meu irmão viuu!! Assim você vai matar o papai. Só digo uma coisa, Domingo ela não vai! Danadaa!! Vem minha odalisca, agora faz essa cobra coral subir!!! Pau que nasce torto, Nunca se endireita. Tchannn!! Tchannn!! Tu du du pááá! Eu gostchu muitchu, heinn! danadinha! Mainhaa! Agora use meu lorem ipsum ordinária!!! Olha o quibeee! rema, rema, ordinária!.
                <br />
                <br />
                Eiiitaaa Mainhaaa!! Esse Lorem ipsum é só na sacanageeem!! E que abundância meu irmão viuu!! Assim você vai matar o papai. Só digo uma coisa, Domingo ela não vai! Danadaa!! Vem minha odalisca, agora faz essa cobra coral subir!!! Pau que nasce torto, Nunca se endireita. Tchannn!! Tchannn!! Tu du du pááá! Eu gostchu muitchu, heinn! danadinha! Mainhaa! Agora use meu lorem ipsum ordinária!!! Olha o quibeee! rema, rema, ordinária!.
              </p>
              <AnchorLink
                className='link-button'
                offset='71'
                href='#contato'
              >
                Contrate!
              </AnchorLink>
            </div>
            <figure
              className='phone'
            >
              <img
                title='Lunnar Applications Apps'
                alt='Lunnar Applications Apps'
                className='img-fluid'
                src={phoneSvg}
              />
            </figure>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About