export const action = {
  setFavorite: 'SET_FAVORRITE',
  deleteFavorite: 'DELETE_FAVORITE',
  loginRequest :'LOGIN_REQUEST',
  logoutRequest: 'LOGOUT_REQUEST',
  registerRequest:'REGISTER_REQUEST',
  getVideoSource: 'GET_VIDEO_SOURCE'
}

export const setFavorite = payload =>({
  type: action.setFavorite,
   payload,
})

export const deleteFavorite = payload=>({
  type: action.deleteFavorite,
  payload,
})

export const loginRequest = payload=>({
  type: action.loginRequest,
  payload,
})

export const logoutRequest = payload=>({
  type: action.logoutRequest,
  payload,
})

export const registerRequest = payload=>({
  type: action.registerRequest,
  payload,
})

export const getVideoSource = payload=>({
  type: action.getVideoSource,
  payload,
})
