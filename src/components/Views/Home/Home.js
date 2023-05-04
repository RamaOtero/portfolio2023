import './home.css'
import foto from '../../Main/Assets/perfil3.png'


const Home = () => {
    return (
        <div className="home">
            <img className='foto' src={foto} />
            <div className="home2">
                <span className='portfolio'>PORTFOLIO</span>
                <span className='nombre'>RAMIRO OTERO</span>
                <a href='https://drive.google.com/uc?id=1tkOCFpXZMe3-YRDYNNopHKO9Q5lRQM9l&export=download'><button className='cvBttn'>CURRICULUM VITAE</button></a>
            </div>
        </div>
    )
}

export default Home