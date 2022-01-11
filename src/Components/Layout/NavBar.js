import '../../Styling/NavBar.css'
import { Link } from 'react-router-dom'
import { BreadcrumbItem } from 'reactstrap'

function NavBar({routes}) {
    return (
      <div className="NavBar">
        <nav className="routes-container">
          {routes.map((route) => {
            return (
              <BreadcrumbItem tag={Link} to={route} key={route} className="routes-link">{route}</BreadcrumbItem>
            )
          })}
        </nav>
      </div>
    );
  }
  
  export default NavBar;
  