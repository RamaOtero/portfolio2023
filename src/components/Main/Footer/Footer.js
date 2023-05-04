import './footer.css'
import iconW from '../../Main/Assets/icons/whatsapp.png'
import iconG from '../../Main/Assets/icons/gmail.png'
import iconB from '../../Main/Assets/icons/behance.png'
import iconL from '../../Main/Assets/icons/linkedin.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerIcnA'>
                <a target='_blank' href='https://wa.me/+5492214958365'><img className='icon' src={iconW} /></a>
                <a target='_blank' href='mailto:ramirootero98@gmail.com'><img className='icon' src={iconG} /></a>
                <a target='_blank' href='https://www.behance.net/ramirootero1'><img className='icon behance' src={iconB} /></a>
                <a target='_blank' href='https://www.linkedin.com/in/ramiro-joaquin-otero-frontend-js-css3-html5-graphic-designer'><img className='icon' src={iconL} /></a>
            </div>
        </div>
    )
}

export default Footer