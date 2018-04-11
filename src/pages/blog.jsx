import React from "react";
import Link from "gatsby-link";
require("prismjs/themes/prism-okaidia.css");

export default ({ data }) => {
  return (
    <div>
      <h1>Blog Posts</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              style={{ textDecoration: `none`, color: '#230051' }}
            >
              <h3>
                {node.frontmatter.title}
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
              slug
          }
          excerpt
        }
      }
    }
  }
`;
