import React, { useState, useEffect} from 'react'
import Search from '../Components/Search'
import Categories from '../Components/Categories'
import Carousel from '../Components/Carousel'
import CarouselItem from '../Components/CarouselItem'
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/App.scss'
const API = 'http://localhost:3000/initalState'

const Home = () =>{
  const initialState = useInitialState(API);
  return initialState.length === 0 ? <h1>Loading....</h1> :(
    <>
      <Search/>

   {initialState.mylist.length > 0 &&
      <Categories title="Mi lista">
        <Carousel>
          <CarouselItem/>
        </Carousel>
      </Categories>
   }

    <Categories title="Originales de platzi video">
      <Carousel>
        {
          initialState.originals.map(item =>
            <CarouselItem key={item.id}{...item} />
        )}
      </Carousel>
    </Categories>

    <Categories title="Tendencias">
      <Carousel>
        {
          initialState.trends.map(item =>
            <CarouselItem key={item.id}{...item} />
        )}
      </Carousel>
    </Categories>
    </>
  )
}
export default Home;
