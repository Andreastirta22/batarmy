import { NavLink } from 'react-router-dom'
import Navbar from '../Pages/Navbar';

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <img src="/src/assets/logo.png" alt="" />
      </NavLink >
      <Navbar />

    </header>
  )
}

export default Header