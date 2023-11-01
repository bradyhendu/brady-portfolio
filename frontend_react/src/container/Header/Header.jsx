import React from 'react'
import './Header.scss'
import {images} from '../../constants'
import{motion} from 'framer-motion'

const Header = () => {
  return (
    <div className ="app__header app__flex">
      <motion.div
      whileInView={{x: [-100, 0], opacity:[0,1]}}
      transition={{duratioin: 0.5}}
      className="app__header-info"
      >
        <div className='a==__header-badge'>
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hi, I am</p>
              <h1 className='head-text'>Brady Henderson</h1>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Header
