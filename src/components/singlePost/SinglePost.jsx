import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './SinglePost.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../context/Context'

const SinglePost = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState({})

    const { user } = useContext(Context)


    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)
            setPost(res.data)
        }
        getPost()
    }, [path])

    const PF = "http://localhost:5000/images/"


    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {
               data: {username: user.username}
            })
            window.location.replace("/")
        } catch (err) {
            
        }
    }

    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                {post.photo &&
                    <img className='singlePostImg' src={PF + post.photo} alt="" />
                }
                <h1 className="singlePostTitle">
                    {post.title}
                    {post.username === user?.username && (
                        <div className="singlePostEdit">
                            <i className='singlePostIcon far fa-edit'></i>
                            <i className='singlePostIcon far fa-trash-alt' onClick={handleDelete}></i>
                        </div>
                        )
                    }

                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <Link className='link' to={`/?user=${post.username}`}><b>{post.username}</b></Link></span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className='singlePostDesc'>{post.desc}</p>
            </div>
        </div>
    )
}

export default SinglePost