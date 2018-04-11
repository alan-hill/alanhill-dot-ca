import React from 'react'
import Link from 'gatsby-link'

const styles = {
  header: {
    backgroundColor: '#212B36',
    marginBottom: '1.5rem',
    padding: 5,
    height: 40,
  },

  link: {
    color: 'white',
    textDecoration: 'none',
  },
}

const Header = ({ siteTitle }) => (
  <div style={styles.header}>
    <div>
      <h3>
        <Link to="/" style={styles.link}>
          {siteTitle}
        </Link>
      </h3>
    </div>
  </div>
)

export default Header
