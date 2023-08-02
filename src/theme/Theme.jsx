import React from 'react'
import Modal from '../component/modal/Modal'
import { primaryColors, backgroundColors } from './data'
import PrimaryColor from './PrimaryColor'
import BackgroundColor from './BackgroundColor'
import './theme.css'

const Theme = () => {
  return (
    <Modal className="theme_modal">
        <h3>Customize Your Theme</h3>
        <small>change the primary and background color to your preference</small>
        <div className="theme_primary-wrapper">
        <h5>Primary Color</h5>
            <div className="theme_primary-colors">
            {
                primaryColors.map(pColor => <PrimaryColor key={pColor.className} 
                className={pColor.className}/>)
            }
            </div>
        </div>
        <div className="theme_background-wrapper">
            <h5>Background Color</h5>
            <div className="theme_background-colors">
                {
                    backgroundColors.map(bcolor => <BackgroundColor key={bcolor.className} className={bcolor.className} />)
                }
            </div>
        </div>
    </Modal>
  )
}

export default Theme