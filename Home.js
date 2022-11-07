import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Video from '../components/Video'
import Midbar from '../components/Midbar'
import Section from '../components/Section'
import Operation from '../components/Operation'



const Home = () => {
    return (
        <div>
            <Navbar />
            <Video />
            <Midbar/>
            <Section/>
            <Operation/>
            <Footer />
           
            
        </div>
    )
}

export default Home;
