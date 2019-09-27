import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from "react-bootstrap"

interface Props {
  location: Location
  title: string
  children?: any
}

const Layout = ({ location, title, children }: Props) => {
  const header = (
    <h1
      style={{
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>
    </h1>
  )

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`
      }}
    >
      <header>{header}</header>
      <Container>
        <Row>
          <Col>
            <main>{children}</main>
          </Col>
        </Row>
      </Container>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href='https://www.gatsbyjs.org'>Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout