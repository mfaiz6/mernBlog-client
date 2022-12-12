import './Post.css'

const Post = () => {
  return (
    <div className='post'>
        <img className='postImg' src="https://blog.hootsuite.com/wp-content/uploads/2019/03/Schedule-Facebook-Posts.jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div><span className="postTitle">Lorem ipsum dolor sit amet</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa quod assumenda ratione a similique placeat vero perferendis delectus impedit, velit, deleniti soluta eos cupiditate possimus odio, natus voluptatem non!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa quod assumenda ratione a similique placeat vero perferendis delectus impedit, velit, deleniti soluta eos cupiditate possimus odio, natus voluptatem non!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa quod assumenda ratione a similique placeat vero perferendis delectus impedit, velit, deleniti soluta eos cupiditate possimus odio, natus voluptatem non!</p>
    </div>
  )
}

export default Post