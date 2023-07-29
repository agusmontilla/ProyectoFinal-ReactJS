import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

import Button from 'react-bootstrap/Button';


const NavBar = () => {
  return (
    <header>
        <Link to="/">
            <img className='imgLogo' src="../imagenes/logo.jpg" alt="Logo de GameSTORagE" />
        </Link>    
        

        <nav>
            <ul>
                <li>
                    <NavLink to="/categoria/1">
                        <Button variant="outline-dark">Deportes</Button> 
                    </NavLink> 
                </li>
                <li>
                    <NavLink to="/categoria/2">
                        <Button variant="outline-dark">Carreras</Button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/categoria/3">
                        <Button variant="outline-dark">Accion</Button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/categoria/4">
                        <Button variant="outline-dark">Terror</Button>
                    </NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar