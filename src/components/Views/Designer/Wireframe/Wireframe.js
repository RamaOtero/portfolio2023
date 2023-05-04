import './wireframe.css'
import wireframeSupra from './assets/isoSupra2.png'
import wireframeFix from './assets/isoFix.png'
import naoWireframe from './assets/isoNao.png'


const Wireframe = () => {
    return (
        <div className='wire'>
            <div className='wireframeDiv'>
                <span> WIREFRAME </span>
            </div>

                <div className='divWireframes'>
                    <img src={wireframeSupra} />
                    <img className='img1' src={wireframeFix} />
                    <img className='img2' src={naoWireframe} />
                </div>
            
        </div>
    )
}

export default Wireframe