import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems:cartItems
}

export default function cartReducer(state=initialState,{type,payload}){
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c=>c.product.id===payload.id)
            break;
        
        case REMOVE_FROM_CART:

            break;
    
        default:
            break;
    }
}