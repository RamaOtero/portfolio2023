import './designer.css'
import Carousel from './Carousel/Carousel.js'
import Branding from './Branding/Branding.js'
import Wireframe from './Wireframe/Wireframe.js';
import Mockup from './Mockup/Mockup.js'

const Designer = () => {
    return (
        <div className='divCarousel'>
            <div className='designer'>
                <div className='logoDiv'>
                   <span>LOGO</span>
                </div>
                <Carousel />
                <Branding />
                <Wireframe />
                <Mockup />
            </div>
        </div>
    )
}

export default Designer