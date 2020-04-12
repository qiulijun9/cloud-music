const initState = {
  count: 0
}
export function reducer(state = initState, action) {

  switch (action.type) {
    case 'add':
      return {
        ...state, count: state.count + 1
      };
    case 'delete':
      return {
        ...state, count: state.count - 1
      };
    default:
      return initState;
  }
}