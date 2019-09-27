import * as React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default class IndexPage extends React.Component {

  public render() {
    const siteTitle = 'Home'

    return (
      <Layout location={window.location} title={siteTitle}>
        <SEO title='Home'/>
        <h1>Oi</h1>
        <p>teste</p>
      </Layout>
    )
  }
}
