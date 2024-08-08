import { useState } from 'react'
import Navabr from './components/Navbar/Navabr'

import './App.css'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Video from './components/Video/Video'

function App() {

  const [playState ,setPlayState] = useState(false);
  

  return (
    <>
    <Navabr/>
    <Hero/>
    <div className="container">
      <Title subTitle='Our Program' title=" What we Offer"/>
    <Programs/>
    <About setPlayState={setPlayState}/>
    <Title subTitle='Gallery' title="Campus Photos"/>
    <Campus/>
    <Title subTitle='TESTIMONIALS' title="What Student Says"/>
    <Testimonials/>
    <Title subTitle='Contact Us ' title="Get in Touch"/>
    <Contact/>
    <Footer/>
    </div>
    <Video playState={playState}  setPlayState={setPlayState} />
    
     
    </>
  )
}

export default App
