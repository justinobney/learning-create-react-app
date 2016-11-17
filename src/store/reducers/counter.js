function counter(state = {clicks: 0}, action) {
  switch (action.type) {
    case 'CLICK':
      return {
        ...state,
        clicks: state.clicks + 2
      }
    default:
      return state
  }
}

export default counter;
