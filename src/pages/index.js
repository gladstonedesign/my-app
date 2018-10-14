import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Freelance Design Agency</h1>
    <p>Design, prototypes, illustrations, motion graphics and much more</p>
    <Link to="/page-2/">Watch my Video</Link>
  </Layout>
)

export default IndexPage
