import './mockup.css'
import buzo from './assets/buzo.jpg'
import mock1 from './assets/mock1.jpg'
import mock2 from './assets/mock2.jpg'
import mock3 from './assets/mock3.jpg'
import mock4 from './assets/mock4.jpg'
import mock5 from './assets/mock5.jpg'
import mock6 from './assets/mock6.jpg'
import mock7 from './assets/mock7.jpg'

const Mockup = () => {
    return (
        <div className='div'>
            <div className='mockSpan'>
                <span> MockUp </span>
            </div>
            <div className='mockImg'>
                <img className='mockI' src={mock4} />
                <img className='mockI' src={mock3} />
                <img className='mockI' src={mock2} />
                <img className='mockI' src={mock1} />
                <img className='mockI' src={mock5} />
                <img className='mockI' src={mock6} />
                <img className='mockI' src={mock7} />
                
            </div>
        </div>
    )
}

export default Mockup