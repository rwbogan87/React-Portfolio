import '../../Styling/NavBar.css'
import { Link } from 'react-router-dom'

function NavBar({routes}) {
    return (
      <div className="NavBar">
        <nav className="routes-container">
          {routes.map((route) => {
            return (
              <Link to={route} key={route} className="routes-link">{route}</Link>
            )
          })}
        </nav>
      </div>
    );
  }
  
  export default NavBar;
  