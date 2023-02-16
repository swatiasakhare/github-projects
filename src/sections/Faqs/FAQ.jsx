import React from 'react'
import Card from "../../component/card/Card"
import {AiOutlinePlus} from 'react-icons/ai'

const FAQ = ({faq}) => {
  return (
    <Card className= "faq">
       <div>
        <h5 className="faq_question">{faq.question}</h5>
        <button className="faq_icon">
            <AiOutlinePlus />
        </button>
       </div> 
       <p className="faq_answer">{faq.answer}</p>
         </Card>
  )
}

export default FAQ