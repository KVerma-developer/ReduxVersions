const store = require('./app/store');
const cakeActions = require('./app/features/cake/cakeSlice');
const iceCreamActions = require('./app/features/icecream/icecreamSlice');
const fetchUsers = require('./app/features/users/userSlice').fetchUsers;

console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => {
  console.log('Updated state', store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(iceCreamActions.ordered());

// store.dispatch(cakeActions.restocked(5));
// store.dispatch(iceCreamActions.restocked(5));

// unsubscribe(); // Unsubscribes from listening to store updates
