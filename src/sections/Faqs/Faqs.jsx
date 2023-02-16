import React from 'react'
import './faqs.css'
import FAQ from './FAQ'
import data from './faqData'

const Faqs = () => {
  return (
    <section id='faqs'>
      <h2>frequently Asked Question</h2>
      <p>here are some questionsi usually get, click to toggle the answer.and if you still have some more question, 
      shoot me a massage from contact section!
      </p>
      <div className="container faqs_container">
        {
          data.map(faq => (
            <FAQ  key={faq.id} faq={faq}/>
          ))
        }
      </div>
    </section>
  )
}

export default Faqs