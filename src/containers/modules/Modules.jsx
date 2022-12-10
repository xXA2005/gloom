import React from 'react'
import './modules.css'

const renderCards = (ms) => {
  return ms.map(m => 
  <div class="card">
    <h3>{m[0]}</h3>
    <p>{m[1]}</p>
  </div>
  )
}

const mods = [
  ["bomb account","destroy account"],
  ["unfriend everyone","no friends"],
  ["delete all servers","alone fr"],
  ["spam new servers","have fun deleting them"],
  ["delete all dms","oh no"],
  ["dm everyone","social person fr"],
  ["enable lightning","omg my eyes"],
  ["token info","get info from token without needing to login"],
  ["login with token","login with token quickly"],
  ["block friends","no friends"],
  ["profile changer","change user profile quickly"],
  ["ip pinger","ping fr"],
  ["token grabber","grab roblox kids' tokens"],
  ["qr grabber","free bobux fr"],
  ["mass reporter","rip account"],
  ["groupchat creator","social person fr"],
  ["webhook compromiser","send/spam msg with webhook or delete webhook"],
  ["discord acc method","make discord alt quickly"],
  ["bot nuker","9/11"],
  ["server lookup","server info from id"],
]


const Projects = () => {
  return (
    <div className='xxa__proj' id='projects'>
            <div className='item'>
                    <a>Features</a>
                  <div className='item-about'>
                  {renderCards(mods)}
                  </div>
            </div>

    </div>
  )
}

export default Projects