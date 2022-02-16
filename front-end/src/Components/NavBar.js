import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className='Nav'>

            <h1>Snacks</h1>
                <Link
                style={{ color: 'white' }}
                to='/snacks/new'>New
                </Link>

        </nav>
    )
}

export default NavBar;