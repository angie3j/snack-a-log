import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className='Nav'>

            <h1>Snacks</h1>
            <button>
                <Link
                style={{ color: 'white' }}
                to='/songs'>NEW
                </Link>
            </button>

        </nav>
    )
}
