 function createStore(reducer) {
   let state = {};

   function getState() {
     return state;
   }

   function dispatch(action) {
     reducer(action)
     return action;
   }

   return {
     getState,
     dispatch,
   };
 }



 const userReducer = (state, action) => {
   switch (action.type) {
     case 'Name':
       console.log(action.state);
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

 function combineReducers(reduers) {
   return (state, action) => {
     let arr = Object.keys(reduers);
     return arr.reduce((newState, key) => {
       newState[key] = reduers[key](state[key], state);
       return newState;
     }, {});

   }
 }


 const myreducer = combineReducers(reduersData);
 const store = createStore(myreducer);
 console.log(store.dispatch({
   type: "Name",
   state: "www"
 }));