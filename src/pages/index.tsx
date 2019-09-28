import * as React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default class IndexPage extends React.Component {

  public render() {
    return (
      <Layout title={'Home'}>
        <SEO title='Home'/>
        Página
      </Layout>
    )
  }
}
