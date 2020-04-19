import React from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import Categories from '../Components/Categories'
import Carousel from '../Components/Carousel'
import CarouselItem from '../Components/CarouselItem'

import '../assets/styles/App.scss'

const App = () =>(
  <div className="App">
    <Header/>
    <Search/>

  <Categories>
    <Carousel>
      <CarouselItem/>
      <CarouselItem/>
      <CarouselItem/>
      <CarouselItem/>
    </Carousel>
  </Categories>
  </div>
)

export default App;
