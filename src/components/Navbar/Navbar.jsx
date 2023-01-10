import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' className = { navData => navData.isActive ? s.activeLink : s.item }>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs' className={({isActive}) => isActive ? `${s.activeLink}` : `${s.item}` }>Messages</NavLink>
      </div>
      <div className={s.item}>
        <a href=''>News</a>
      </div>
      <div className={s.item}>
        <a href=''>Music</a>
      </div>
      <div className={s.item}>
        <a href=''>Settings</a>
      </div>
      <div className={s.item}>
        <a href=''>Friends</a>
        
      </div>
    </nav>
  )
}

export default Navbar;