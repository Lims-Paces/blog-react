import React from 'react'
import './singlePost.css'

export default function singlePost() {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img
          src='https://images.pexels.com/photos/3585812/pexels-photo-3585812.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          alt=''
          className='singlePostImg'
        />
        <h1 className='singlePostTitle'>
          Lorem ipsum dolor sit amet.
          <div className='singlePostEdit'>
            <i className='singlePostIcon fa-solid fa-pen-to-square'></i>
            <i className='singlePostIcon fa-solid fa-trash-can'></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author: <b>Lims</b>
          </span>
          <span className='singlePostAuthor'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti cum
          quia vel, quod quasi neque odio assumenda iure possimus, consequatur
          eum quis, quidem sequi! Quod harum provident quisquam possimus alias
          pariatur vero enim ea unde! Obcaecati dolores eligendi quis officia
          fugiat id suscipit velit a excepturi aliquam nam aut laborum nisi,
          provident itaque blanditiis. Voluptatibus explicabo beatae dolores,
          totam quas aperiam pariatur recusandae quasi eum ullam rem quod eaque
          iusto, amet ipsa magnam distinctio architecto provident molestias!
          Assumenda sapiente incidunt unde placeat veniam vero odio, nulla
          reiciendis temporibus culpa cupiditate magnam aspernatur delectus
          porro sit deleniti fugit alias? Officiis quo ut quisquam eveniet autem
          asperiores aperiam enim totam, non atque sit nesciunt iusto deserunt,
          doloremque reprehenderit optio minima eaque tenetur sequi commodi
          quaerat. Vero fugit, accusantium accusamus quibusdam odio in ullam
          commodi vel praesentium reiciendis eaque mollitia iusto, architecto
          deleniti, debitis quae ab earum officia. Quo ipsum cupiditate dolore
          animi expedita error at reprehenderit mollitia accusantium porro nobis
          quaerat fuga ipsam eaque, fugit exercitationem dolor! Excepturi
          debitis minus dignissimos tempora consequatur. Blanditiis, velit,
          maxime consequuntur doloremque fugit ut ex, tempora alias accusamus
          qui porro ratione quibusdam minus accusantium repudiandae. Ipsam esse
          consequuntur saepe vero voluptatum? Repudiandae eos similique
          blanditiis neque.
        </p>
      </div>
    </div>
  )
}
