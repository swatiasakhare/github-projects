import React from 'react'
import './services.css'
import data from './data'
import Card from '../../component/card/Card'

const Services = () => {
  return (
    <section id='services'>
      <h2>My services</h2>
      <p>I give you the best in all the services bellow</p>
      <div className="container service_container" >
        {
        data.map(item => (
          <Card key={item.id} className="service light">
            <div className="service_icon">{item.icon}</div>
            <div className="service_details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>

          </Card>
         ))
        }
      </div>
    </section>
  )
}

export default Services