import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  
  return (
    <header>
      <nav>
        <NavLink to='/' className={ ({isActive}) =>isActive ? 'activeLink' : 'nonactiveLink'
        }>Domů</NavLink><br />
        
        <NavLink to='/comedy' className={({ isActive }) =>isActive ? 'activeLink' : 'nonactiveLink'
        }>Komedie</NavLink><br />
        
        <NavLink to='/serials' className={({ isActive }) =>isActive ? 'activeLink' : 'nonactiveLink'
        }>Seriály</NavLink><br />
        
        </nav>
    </header>
  )
}
export default Header