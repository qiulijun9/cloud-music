const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'Name':
      return action.state;
    default:
      return state;
  }
}

const dogReducer = (state = [], action) => {
  switch (action.type) {
    case 'DogName':
      return action.state;
    default:
      return state;
  }
}

let reduersData = {
  user: userReducer,
  dog: dogReducer
}


export default function combineReducers(reduers) {
  return (state, action) => {
    let arr = Object.keys(reduers);
    return arr.reduce((newState, key) => {
      newState[key] = reduers[key](state, action);
      return newState;
    }, {});
  }
}

const reducer = combineReducers(reduersData);
console.log(333, reducer)