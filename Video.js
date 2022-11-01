import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import spaceVideo from '../assets/spaceA.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Rmc Lingo</h1>
                <p>The Proactive Language Lab</p>
                <div>
                    <Link to='/training' className='btn'>Apply</Link>
                    <Link to='/contact' className='btn btn-light'>Launch</Link>
                </div>
            </div>
        </div>
    )
}

export default Video