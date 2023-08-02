import './contact.css'
import contacts from './contactData'

const Contact = () => {
  return (
    <section id='contact'>
      <h2>get in touch</h2>
      <p>shoot me a message via any of the links below</p>
      <div className="container contact_container">
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} target='_blank' rel='noopener noreferrer'>{contact.icon}</a>)
        }
      </div>
    </section>
  )
}

export default Contact