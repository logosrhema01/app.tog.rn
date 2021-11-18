export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const initialState: any[] = []

const cartItemsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.find(item=>item.id===action.payload.id)){
        let existingItem = state.find(item=>item.id===action.payload.id)
        existingItem.count++
        return [
          ...state.filter(item=>item.id!==action.payload.id),
          { ...existingItem }
        ]
      }
      return [
        ...state,
        {...action.payload, count: 1}
      ]
    case REMOVE_FROM_CART:
      return state.filter(cartItem => cartItem.id !== action.payload.id)
  }
  return state
}

export default cartItemsReducer