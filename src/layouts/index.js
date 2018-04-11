import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Sidebar from '../components/sidebar'

const styles = {
  app: {
    width: '100vw',
    padding: 0,
    margin: '0 auto',
  },

  content: {
    width: '80vw',
    paddingTop: '15px',
  },
}

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'My personal websites with blog posts and past projects.',
        },
        {
          name: 'keywords',
          content: 'programming, ruby, portfolio, react, blog',
        },
      ]}
    />

    <div style={styles.app}>
      <Sidebar
        siteTitle={data.site.siteMetadata.title}
        links={data.allMarkdownRemark}
      />
      <div style={styles.content}>{children()}</div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query sidebarQueryAndSiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            category
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
