const { configureStore } = require('@reduxjs/toolkit');
const cakeReducer = require('../app/features/cake/cakeSlice');
const iceCreamReducer = require('../app/features/icecream/icecreamSlice');
const userReducer = require('../app/features/users/userSlice');

const store = configureStore({
  reducer: {
    // cake: cakeReducer,
    // iceCream: iceCreamReducer,
    user: userReducer,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

module.exports = store;
