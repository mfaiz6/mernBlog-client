import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './TopBar.css'

const Topbar = () => {
    const {user, dispatch} = useContext(Context)
    const PF = "http://localhost:5000/images/"


    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
    }

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
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link to="/settings"><img className='topImg' src={PF+user.profilePic} alt="dp-icon" /></Link>
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