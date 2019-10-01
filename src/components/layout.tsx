import React from 'react'
import Header from './header'
import Footer from './footer'

interface Props {
  children?: any,
  is404?: boolean
}

const Layout = ({ children, is404 = false }: Props) => {
  return (
    <div
      className='layout'
    >
      <Header is404={is404} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout