
import './branding.css'
import brand1 from './assets/brand1.jpg'
import brand2 from './assets/brand2.jpg'
import brand3 from './assets/brand3.jpg'
import brand4 from './assets/brand4.jpg'
import brand5 from './assets/brand5.jpg'
import brand6 from './assets/brand6.jpg'
import brand7 from './assets/brand7.jpg'
import brand8 from './assets/brand8.jpg'
import brand9 from './assets/brand9.png'
import brand10 from './assets/brand10.jpg'
import brand11 from './assets/brand11.jpg'



const Branding = () => {
    return (
        <div>
            <div className='brandingSpan'>
                <span> BRANDING </span>
            </div>
            <div className='brandingImg'>
                <img className='zoom brandP' src={brand4} />
                <img className='zoom brandP' src={brand3} />
                <img className='zoom brandP' src={brand2} />
                <img className='zoom brandP' src={brand1} />
                <img className='zoom brandP' src={brand5} />
                <img className='zoom brandP' src={brand6} />
                <img className='zoom brandP' src={brand7} />
                <img className='zoom brandP' src={brand8} />
                <img className='zoom brandP' src={brand9} />
                <img className='zoom brandP' src={brand10} />
                <img className='zoom brandP' src={brand11} />
            </div>
          
        </div>
    )
}

export default Branding