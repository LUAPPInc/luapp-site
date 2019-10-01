import React from 'react'
import Slider from 'react-slick'
import { Container, Row, Col } from 'react-bootstrap'
import gtPlanPng from '../../images/gtplan.png'
import elefanteRosaPng from '../../images/elefanterosa.png'
import contatusPng from '../../images/contatus.png'
import nossoCupomPng from '../../images/nossocupom.png'
import oCupomPng from '../../images/ocupom.png'
import mandaUmaPng from '../../images/mandauma.png'

interface Props {}

const Customers = ({}: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        centerMode: true,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <div
      className='customers'
      id='clientes'
    >
      <Container>
        <Row>
          <Col lg='12' className='align-self-center'>
            <h2>
              Os Clientes.
              {/* <span>
                todos tem 19
              </span> */}
            </h2>
          </Col>
          <Col lg='12' className='align-self-center'>
            <Slider
              {...settings}
            >
              <div>
                <figure>
                  <img
                    src={gtPlanPng}
                    className='img-fluid'
                    alt='GTPlan'
                    title='GTPlan'
                  />
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    src={elefanteRosaPng}
                    className='img-fluid'
                    alt='Grupo Elefante Rosa'
                    title='Grupo Elefante Rosa'
                  />
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    src={contatusPng}
                    className='img-fluid'
                    alt='Contatus Eventos'
                    title='Contatus Eventos'
                  />
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    src={mandaUmaPng}
                    className='img-fluid'
                    alt='Manda Uma App'
                    title='Manda Uma App'
                  />
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    src={nossoCupomPng}
                    className='img-fluid'
                    alt='Nosso Cupom'
                    title='Nosso Cupom'
                  />
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    src={oCupomPng}
                    className='img-fluid'
                    alt='O Cupom'
                    title='O Cupom'
                  />
                </figure>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Customers