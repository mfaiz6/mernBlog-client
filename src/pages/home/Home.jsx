import { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sideBar/SideBar'
import './Home.css'
import axios from 'axios'
const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts")
      setPosts(res.data)
    }
    fetchPosts()
  }, [])

  return (
    <>
    <Header />
    <div className='home'>
      <Posts posts={posts} />
      <SideBar />
    </div>
    </>
  )
}

export default Home