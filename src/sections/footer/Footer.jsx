import React from 'react'
import './footer.css'
import {links,socials} from './footerData'

const Footer = () => {
  return (
    <footer>
      <div className="container footer_container">
        <ul className="nav_menu">
        {
          links.map(fLink => <a key={fLink.id} href={fLink.link}>{fLink.title}</a>)
        }
        </ul>
        <div className="footer_socials">
        {
          socials.map(social => <a key={social.id} href={social.link} target='_blank' rel='noopener noreferrer'>{social.icon}</a>)
        }
        </div>
    </div>
    <div className="footer_copyright">
      <small>2023 swati sakhare &copy;All Rights Reserved</small>
    </div>
    </footer>
  )
}

export default Footer