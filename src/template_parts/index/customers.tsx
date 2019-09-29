import React from 'react'
import Slider from 'react-slick'
import { Container, Row, Col } from 'react-bootstrap'

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
              <span>
                todos tem 19
              </span>
            </h2>
          </Col>
          <Col lg='12' className='align-self-center'>
            <Slider
              {...settings}
            >
              <div>
                <figure>
                  <img
                    src='http://gtplan.com.br/company/wp-content/uploads/2018/05/Picture1-3.png'
                    className='img-fluid'
                    alt='GTPlan'
                    title='GTPlan'
                  />
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    src='http://gtplan.com.br/company/wp-content/uploads/2018/05/Picture1-3.png'
                    className='img-fluid'
                    alt='GTPlan'
                    title='GTPlan'
                  />
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    src='http://gtplan.com.br/company/wp-content/uploads/2018/05/Picture1-3.png'
                    className='img-fluid'
                    alt='GTPlan'
                    title='GTPlan'
                  />
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    src='http://gtplan.com.br/company/wp-content/uploads/2018/05/Picture1-3.png'
                    className='img-fluid'
                    alt='GTPlan'
                    title='GTPlan'
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