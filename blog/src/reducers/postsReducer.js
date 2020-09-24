// Reducer that calls on state and an action to create a new stated array based on the action in the return statement every time FETCH_POSTS is called //
export default ( state = [], action ) => {
   switch (action.type) {
       case 'FETCH_POSTS':
        return action.payload;
        default:
            return state;
   }

};


// export default (state = [], action) => {
//     switch (action.type) {
//         case 'FETCH_POSTS':
//             return action.payload;
//         case 'ADD_POST':
//             return [...state, action.payload];
//         default:
//             return state;
//     }
// }