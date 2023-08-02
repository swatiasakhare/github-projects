import React from 'react'

import Scrollspy from 'react-scrollspy';
import Nav from './Nav'
import data from './data'
import './flotingNav.css'

const FlotingNav = () => {
  return (
    <ul id="floating_nav">
      <Scrollspy offset={-500} className="scrollspy" items={['header','about','services', 'portfolio','contact']} currentClassName= 'active'>
        {
          data.map(item => <Nav key={item.id} item={item} />)
        }
    </Scrollspy>
    </ul>
  )
}

export default FlotingNav