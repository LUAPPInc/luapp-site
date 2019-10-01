import * as React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../template_parts/index/banner'
import About from '../template_parts/index/about'
import Services from '../template_parts/index/services'
import Customers from '../template_parts/index/customers'
import Contact from '../template_parts/index/contact'

export default class IndexPage extends React.Component {

  public render() {
    return (
      <Layout>
        <SEO title='Home'/>
        <Banner />
        <About />
        <Services />
        <Customers />
        <Contact />
      </Layout>
    )
  }
}
