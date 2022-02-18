import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className='Nav'>

            <h1>Snacks</h1>
            <Link to="/songs">
        <button style={{ color: "white" }}>INDEX</button>
      </Link>

      <Link to="/songs/new">
        <button style={{ color: "white" }}>NEW</button>
      </Link>


        </nav>
    )
}

export default NavBar;