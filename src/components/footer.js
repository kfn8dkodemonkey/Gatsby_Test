import * as React from "react"
import { Link } from 'gatsby';


const Footer = () => (
  <footer className="bg-black text-white text-center py-3">
    <ul className="list-inline mb-0">
      <li className="list-inline-item">
        <Link to="/privacy" className="text-white text-decoration-none">Privacy Policy</Link>
      </li> 
      <li className="list-inline-item">
        <Link to="/terms" className="text-white text-decoration-none">Terms of Service</Link>
      </li>
    </ul>

    © { new Date().getFullYear() }  Built with {` `} <a href="https://www.gatsbyjs.com">Gatsby</a> by < a href = "https://kaffeinatedkodemonkey.com" > Kaffeinated kodemonkey</a >
  </footer>
);

export default Footer;