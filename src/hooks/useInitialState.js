import { useState, useEffect} from 'react'

const useInitialState = (API) =>{
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: []

  })

  useEffect(()=>{
    fetch(API)//la api que se desea utilizar
      .then(response => response.json())//convertimos el json
      .then(data => setVideos(data))//pasamos la data a nuestara  variable setVideos
  },[]);
  return videos
}

export default useInitialState
