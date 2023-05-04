import './skills.css'
import AfterEffect from './assets/AfterEffects2.png'
import css3 from './assets/css32.png'
import html5 from './assets/html52.png'
import ilustrator from './assets/ilustrator2.png'
import js from './assets/js2.png'
import lightroom from './assets/lightroom2.png'
import photoshop from './assets/photoshop2.png'
import programacion from './assets/programacion2.png'
import react from './assets/react2.png'
import camara from './assets/hobbies/camara2.png'
import guitarra from './assets/hobbies/guitarra2.png'
import lapiz from './assets/hobbies/lapiz2.png'
import mezcla from './assets/hobbies/mezcla2.png'
import pincel from './assets/hobbies/pincel2.png'
import skater from './assets/hobbies/skater2.png'
import wacom from './assets/hobbies/wacom2.png'

const Skills = () => {
    return (
        <div className='div'>
            <div>
                <div className='divS'>
                    
                    <div className='divSkills'>
                        <img className='logo' src={css3} />
                        <img className='logo' src={html5} />
                        <img className='logo' src={photoshop} />
                        <img className='logo' src={ilustrator} />
                        <img className='logo' src={react} />
                        <img className='logo' src={AfterEffect} />
                        <img className='logo' src={js} />
                        <img className='logo' src={lightroom} />
                        <img className='logo' src={programacion} />
                    </div>
                    <div className='divSkills'>    
                        <img className='logo' src={camara} />
                        <img className='logo' src={guitarra} />
                        <img className='logo' src={mezcla} />
                        <img className='logo' src={pincel} />
                        <img className='logo' src={skater} />
                        <img className='logo' src={wacom} />                      
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills