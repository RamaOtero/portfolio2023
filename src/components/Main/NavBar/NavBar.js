import './NavBar.css'
import Button from './Button/Button'
//import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <div className="navBtts">
                <Button label="Designer" />
                <Button label="Front-End Developer" />
            </div>
        </div>
    )

}

export default NavBar