import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './TopBar.css'

const Topbar = () => {
    const {user} = useContext(Context)
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className='link' to="/">
                            Home
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/about">
                            About
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/write">
                            Write
                        </Link>
                    </li>
                    <li className="topListItem">
                        {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <img className='topImg' src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="dp-icon" />
                ) : (
                    <ul className='topList'>
                        <li className='topListItem'><Link className='link' to="login">Login</Link></li>
                        <li className='topListItem'><Link className='link' to="register">Register</Link></li>
                    </ul>
                )}
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default Topbar