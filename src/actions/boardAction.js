import { get } from "react-native/Libraries/Utilities/PixelRatio";

const url = 'https://sugoku.herokuapp.com/'

// For Validating
const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')
const encodeParams = (params) => 
  Object.keys(params)
  .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
  .join('&');
// End Validating


const setLoading = (input) => {
  return {
    type: 'SET_LOADING',
    payload: input
  }
}

const setError = (input) => {
  return {
    type: 'SET_ERROR',
    payload: input
  }
}

// ? Action Start Here

export const setBoard = (diff) => {
  return (dispatch, getState) => {
    dispatch(setLoading(true))
    fetch(url + 'board?difficulty=' + diff)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'SET_BOARD',
          payload: data.board
        })
        const init = JSON.parse(JSON.stringify(data.board))
        dispatch({
          type: 'SET_INIT_BOARD',
          init: init
        })
        dispatch(setLoading(false))
      })
      .catch(err => dispatch(setError(true)))
  }
}

export const validateBoard = (arr) => {
  const obj = {board: arr}
  return (dispatch, getState) => {
    fetch(url + 'validate', {
      method: 'POST',
      body: encodeParams(obj),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
      .then(response => response.json())
      .then(data => {
      dispatch({
        type: 'SET_IS_SOLVED',
        payload: data.status
      })
      let time = 0
      if (data.status === 'solved') {
        time = 500
      } else {
        time = 3000
      }
      setTimeout(() => {
        dispatch({
          type: 'SET_IS_SOLVED',
          payload: ''
        })
      }, time);
      })
      .catch(err => dispatch(setError(true)))
  }
}

export const solveBoard = (arr) => {
  const obj = {board: arr}
  return (dispatch, getState) => {
    fetch(url + 'solve', {
      method: 'POST',
      body: encodeParams(obj),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: 'SET_BOARD',
          payload: data.solution
        })
      })
      .catch(err => dispatch(setError(true)))
  }
}

export const changeBoard = (arr) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_BOARD',
      payload: arr
    })
  }
}

export const unmounting = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'SETBOARD',
      payload: []
    })
    dispatch({
      type: 'SET_INIT_BOARD',
      payload: []
    })
    dispatch({
      type: 'SET_IS_SOLVED',
      payload: ''
    })
    dispatch(setLoading(true))
  }
}