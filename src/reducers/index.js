const reducer = (state, action) =>{
  switch (action.type) {
    case 'SET_FAVORRITE':
      return{
        ...state,
        myList:[...state.myList, action.payload]
      }
      case 'DELETE_FAVORITE':
        return{
          ...state,
          myList: state.myList.filter(items => items.id !== action.payload)
        }
      case 'LOGIN_REQUEST':
        return{
          ...state,
          user:action.payload,
        }
      case 'LOGOUT_REQUEST': 
        return{
          ...state,
          user:action.payload,
        }
      case 'REGISTER_REQUEST':
        return{
          ...state,
          user:action.payload,
        }
      case 'GET_VIDEO_SOURCE':
        return{
          ...state,
          playing: state.trends.find(item =>item.id === Number(action.payload))
          || state.originals.find(item =>item.id === Number(action.payload))
          ||[]
        }
      case 'SEARCH':
        if (action.payload) {
          return{
            ...state,
            search: state.trends.filter((item)=>{
              return item.title.toLowerCase().includes(action.payload.toLowerCase())
            }),
          }          
        }else{
          return{
            ...state,
            search:[]
          }  
        }
    default:
      return state;
  }
}

export default reducer
