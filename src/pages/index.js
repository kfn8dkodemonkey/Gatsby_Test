// This is a PWA's app. 
// JAMStack: Headless WP + Gatsby site, Hosted on git or netlify 

import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    
    {/* Tab Layout lives for Shoots | Clubs & Ranges | Pro-Shops */}
    <div className="container-fluid">
      <div className="row mb-3">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Trucks</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Events</a>
          </li>
        </ul>
      </div>
      <div className="row ms-1">
        <p>Content to come I am peicing this together.</p>

      </div>
    </div>

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Food Truck Alley" />

export default IndexPage
