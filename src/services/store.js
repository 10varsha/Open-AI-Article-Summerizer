import { configureStore } from "@reduxjs/toolkit";

import {articleApi} from './article';

export const store = configureStore({
  reducer : {
    [articleApi.reducerPath]: articleApi.reducer
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})


// Middleware is some code you can put between the framework receiving a request, and the framework generating a response.

//It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.