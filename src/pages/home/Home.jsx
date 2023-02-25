import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'

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
      </div>
  )
}

export default Home
