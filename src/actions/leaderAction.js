export const changeLeaderBoard = (obj) => {
  return (dispatch, getState) => {
    const { easy, medium, hard } = getState().leaderBoard
    if (obj.diff === 'easy') {
      const newBoard = [...easy, obj]
      const sorted = newBoard.sort((a, b) => a.second - b.second)
      dispatch({
        type: 'SET_EASY',
        payload: sorted
      })
    }
    if (obj.diff === 'medium') {
      const newBoard = [...medium, obj]
      const sorted = newBoard.sort((a, b) => a.second - b.second)
      dispatch({
        type: 'SET_MEDIUM',
        payload: sorted
      })
    }
    if (obj.diff === 'hard') {
      const newBoard = [...hard, obj]
      const sorted = newBoard.sort((a, b) => a.second - b.second)
      dispatch({
        type: 'SET_HARD',
        payload: sorted
      })
    }
  }
}