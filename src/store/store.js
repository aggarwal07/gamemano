import { configureStore } from '@reduxjs/toolkit'
import RestApiReducer from './Reducers/restApiReducers'
import reducer from './Reducers/globalReducer'

export const store = configureStore({
  reducer: {
    restApiState: RestApiReducer,
    globalState: reducer
  },
})