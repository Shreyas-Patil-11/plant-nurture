import React from 'react'
import '../styles/header.css'
import clover from './images/clover.png'
import cactus from './images/cactus3.webp'

const Header = () => {
  return (
    <div className='head'>
        <div className="head__text">
          <h1 className="head__title">
            Every plant has a story to tell
            <img src={clover} alt="" width={60} style={{marginLeft: "10px"}} />
          </h1>
          <h3 className="head__subtitle">
          PlantNurtures is a revolutionary website designed to provide users with instant and accurate information about plants using image recognition technology. With PlantNurtures, capturing the beauty of plants and gaining knowledge about them has never been easier.
          </h3>
          <a href="#info">
          <button className='scanbtn'>Take Snap
          <div className="iconButton">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
  </div></button>
  </a>
        </div>
        <div className="head__img">
            <img src={cactus} alt="" />
        </div>
    </div>
  )
}

export default Header