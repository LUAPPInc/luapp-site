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
      {/* <p
        className='app'
      >
        _Desenvolvimento de aplicativos
      </p> */}
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
                A ideia original da LUAPP surgiu com 5 amigos fascinados por tecnologia que, desde o ensino médio, sabiam que juntos poderiam criar coisas grandiosas, transformar sonhos em realidade e resolver problemas do cotidiano de uma forma diferente das demais.
                <br/>
                <br/>
                Descontentes de como o mercado de serviços estava tratando seus clientes e seus projetos, a LUAPP veio para desconstruir a forma como tecnologia é dada à sociedade. O foco e a atenção na necessidade de cada cliente para cada situação é faz com que nossas soluções sejam as melhores possíveis para cada tipo de problema, seja apenas tirar uma ideia do papel ou então para desenvolver um grande produto.
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