import { createStore } from 'redux'
import cartItemsReducer from './CartItems'

const store = createStore(cartItemsReducer)

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch