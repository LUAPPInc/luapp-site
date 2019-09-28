import React from 'react'
import Header from './header'
import Footer from './footer'

interface Props {
  title: string
  children?: any
}

const Layout = ({ title, children }: Props) => {
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