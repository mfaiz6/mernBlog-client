import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './SideBar.css'

const SideBar = () => {
  const [cats, setCats] = useState([])

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories/")
      setCats(res.data)
    }
    getCats()
  }, [])


  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img src="https://blog.hootsuite.com/wp-content/uploads/2022/06/Instagram-Apps-Cover-Photo-556x556.png" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus iure magnam, at distinctio ipsa</p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <li className="sidebarListItem">{c.name}</li>
          ))}

        </ul>
      </div>
      <div className="sidebarITem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}

export default SideBar