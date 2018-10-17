import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div  className="LayOut">
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Gladstone <br />Design</h1>
          <p>Design, prototypes, illustrations, motion graphics and a whole bunch of
          more stuff that'l knock you iff your feets so hard you wont get what hit ya.</p>
          <Link to="/page-2/">Watch Supercool Videos</Link>
        </div>
      </div>
    </div>

  </Layout>
)

export default IndexPage
