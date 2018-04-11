import React from 'react'
import Link from 'gatsby-link'

const styles = {
  sidebar: {
    backgroundColor: '#212B36',
    padding: 5,
    height: '100vh',
    width: '15vw',
    margin: '0',
    float: 'left',
    marginRight: '1em',
  },

  sidebarHeader: {
    borderBottom: '2px solid #fff',
  },

  linkHref: {
    color: 'white',
    textDecoration: 'none',
    fontSize: 16,
  },

  linkContainer: {
    listStyle: 'none',
    padding: 10,
  },

  linkSubContainer: {
    listStyle: 'none',
    padding: 5,
    display: 'none',
  },
}

const Sidebar = ({ siteTitle, links }) => (
  <div style={styles.sidebar}>
    <p style={styles.sidebarHeader}>
      <Link to="/" style={styles.linkHref}>
        {siteTitle}
      </Link>
    </p>
    <ul>
      <li style={styles.linkContainer}>
        <Link to="/about" style={styles.linkHref}>
          👋 About
        </Link>
      </li>

      <li style={styles.linkContainer}>
        <Link to="/projects" style={styles.linkHref}>
          👨‍💻 Projects
        </Link>
      </li>

      <li style={styles.linkContainer}>
        <Link to="/blog" style={styles.linkHref}>
          📙 Blog
        </Link>

        {links.edges.map(({ node }) => (
          <li key={node.id} style={styles.linkSubContainer}>
            <Link to={node.fields.slug} style={styles.linkHref}>
              {node.frontmatter.title}
            </Link>
          </li>
        ))}
      </li>
    </ul>
  </div>
)

export default Sidebar
