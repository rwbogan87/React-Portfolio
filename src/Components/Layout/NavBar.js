import '../../Styling/NavBar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
// import { BreadcrumbItem } from 'reactstrap'
//* not crazy about the divider
function NavBar({routes}) {
const [focusBorder, setFocusBorder] = useState(null);

let activeNavFunction = (data) => {
  console.log(data)
  setFocusBorder(data)
}

    return (
      <div className="NavBar">
        <nav className="routes-container">
          {routes.map((route) => {
            return (
              <Link tag={Link} to={route} key={route} className="routes-link" id={focusBorder}
              onClick={() => activeNavFunction(route)}>{route}</Link>
            )
          })}
        </nav>
      </div>
    );
  }
  
  export default NavBar;
  