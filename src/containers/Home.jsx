import React, { useState, useEffect} from 'react'
import {connect} from 'react-redux'
import Search from '../Components/Search'
import Categories from '../Components/Categories'
import Carousel from '../Components/Carousel'
import CarouselItem from '../Components/CarouselItem'
import '../assets/styles/App.scss'

const Home = ({myList, trends, originals}) =>{
  console.log(originals)
  return(
    <>
      <Search/>

   {myList.length > 0 &&
      <Categories title="Mi lista">
        <Carousel>
          {myList.map(item=>
            <CarouselItem
              key={item.id}
              {...item}
              isList
            />
          )}
        </Carousel>
      </Categories>
   }

    <Categories title="Originales de platzi video">
      <Carousel>
        {
          originals.map(item =>
            <CarouselItem key={item.id}{...item} />
        )}
      </Carousel>
    </Categories>

    <Categories title="Tendencias">
      <Carousel>
        {
          trends.map(item =>
            <CarouselItem key={item.id}{...item} />
        )}
      </Carousel>
    </Categories>
    </>
  )
}

/**coge lo que este en state y lo mapea en props */
const mapStateToProps = state => {
  return{
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  }
}
export default connect(mapStateToProps, null)(Home)
