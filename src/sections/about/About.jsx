import "./about.css"
import AboutImg from "../../assets/img2.jpg"
import CV from "../../assets/sample.pdf" 
import Card from '../../component/card/Card'
import data from './aboutdata'
import {HiDownload} from 'react-icons/hi'

const About = () => {
  return (
    <section id="about">
      <div className="container about_container">
        <div className="about_left">
          <div className="about_portrait">
            <img src={AboutImg} alt="About image" />
            </div>
        </div>
        <div className="about_right">
          <h2>About me</h2>
          <div className="about_cards">
            {
              data.map(item => (
                <Card key={item.id} className="about_card">
                  <span className="about_card-icon">{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi nobis temporibus dolores voluptas 
            officia laborum sint quis vitae, alias beatae.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit, earum labore illum asperiores 
              id ipsam cumque minima impedit nobis.
              </p>
              <a href={CV} download className="btn primary">Download CV<HiDownload/></a>
        </div>

      </div>
    </section>
  )
}

export default About;