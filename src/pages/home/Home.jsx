import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
      <div>
        <Navbar/>
        <Header/>
        <div className="home">
          <div className="home_container">
            <Featured/>
          </div>
        </div>
        <Footer/>
      </div>
  )
}

export default Home
