import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
const Projects = ({ data }) => {
  return (
    <Layout pageTitle="My Projects">
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}
export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`
export default Projects