import React from 'react'
import Header from './header'
import Footer from './footer'

interface Props {
  children?: any
}

const Layout = ({ children }: Props) => {
  return (
    <div
      className='layout'
    >
      <Header  />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout