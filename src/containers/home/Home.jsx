import React from 'react'
import './home.css'
import image from './image.png'


const Home = () => {
  return (
    <div className='xxa__home section__padding' id='home'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"></link>
      <div className='xxa__home-content'>
        <h1 className='gradient__text'>Gloom Multi Tool</h1>
        <p>Gloom Tool the best in discord and the funni fr trol and have fun UwU</p>
        <div className='xxa__home-image'>
          <img src={image} alt='image'/>
      </div>
            <div className='buttons-container'>
            <a href="https://discord.com/users/661693178960936970/profile" target="_blank" className='xxa__home-button'><i class="fa-brands fa-discord"></i> Discord</a>
            <a href="https://github.com/crxel" target="_blank" className='xxa__home-button'><i class="fa-brands fa-github"></i> crxel</a>
            <a href="https://youtu.be/NViVIzXptaw" target="_blank" className='xxa__home-button'><i class="fa-brands fa-youtube"></i> crxelty</a>
            </div>
      </div>

      

    </div>

  )
}

export default Home