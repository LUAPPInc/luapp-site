import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const NotFoundPage = ({ data }: Props) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout>
      <SEO title='404: Not Found' />
      <div className='page-404'>
        <div className='wrapper'>
          <h1>
            Página não encontrada
          </h1>
          <p>
            A página que você está procurando não existe.<br />
            Use o menu superior para voltar para o site.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`