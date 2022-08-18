import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className='post'>
      <img
        className='postImg'
        src='https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        alt=''
      />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Weddings</span>
          <span className='postCat'>Relationships</span>
        </div>
        <span className='postTitle'>Lorem ipsum dolor sit amet</span>
        <hr />
        <span className='postDate'>2 hours ago</span>
      </div>
      <p className='postDesc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        modi, omnis, exercitationem similique repellendus odit aperiam
        architecto ad porro numquam et iusto, ducimus excepturi! Beatae placeat
        et eaque temporibus laborum repudiandae, odit suscipit omnis veritatis
        quasi recusandae libero natus reprehenderit nobis. Molestias voluptate
        ex deleniti ullam dicta? Sit atque quae perferendis aut, quasi voluptas
        repellendus reiciendis culpa reprehenderit repellat, molestias illo
        soluta officia sed quo iusto. Hic aperiam repudiandae aliquam
        exercitationem quasi optio. Et voluptatibus mollitia enim voluptate
        rerum qui!
      </p>
    </div>
  )
}
