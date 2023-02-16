import React from 'react'
import Card from "../../component/card/Card"

const Testimonial = ({testimonial}) => {
  return (
    <Card className="light">
        <p>{testimonial.quote}</p>
        <div className="testimonial_client">
            <div className="testimonial_client-avatar">
                <img src={testimonial.avatar} alt="testimonial avatar" />
            </div>
            <div className="testimonial_client-details">
                <h6>{testimonial.name}</h6>
                <small>{testimonial.profession}</small>
            </div>
        </div>
    </Card>
  )
}

export default Testimonial