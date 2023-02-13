import React from 'react'
import HeaderImg from '../../assets/img3.jpg'
import data from './data'
import './header.css'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header_container">
        <div className="header_profile">
          <img src={HeaderImg} alt="Header portait" />
        </div>
        <h3>Swati Bhise</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sequi recusandae incidunt 
          ratione corrupti magnam voluptatem, itaque ullam sunt beatae!
          </p>
          <div className="header_cta">
            <a href="#contact" className='btn primary'>Let's Talk</a>
            <a href="#portfolio" className='btn light'>My Work</a>
          </div>
          <div className="header_socials">
            {
              data.map(item => <a key={item.id} href={item.link}>{item.icon}</a>)
            }
          </div>
      </div>
    </header>
  )
}

export default Header