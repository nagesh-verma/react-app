import {ADD_PRODUCT,ADD_COUNT,DELETE_COUNT,FETCH_PRODUCTS} from '../constants/types'


export default (state = {cart:[],quantity:0},action) =>{
    switch (action.type){
        default:
            return state;

        case ADD_PRODUCT:
            {
                let cart = [...state.cart];
                let quantity = state.quantity;
                let index = cart.findIndex(c=>c.id === action.data.id);
                if(index === -1){
                    cart.push(action.data);

                }
                else{
                    cart[index].quantity+=1;
                }
                
                quantity++;
                return {...state,cart,quantity}
            }

        case ADD_COUNT:
            {
                let cart = [...state.cart];
                let quantity = state.quantity;
                let index = cart.findIndex(c => c.id === action.data);
                if(index!==-1){
                    cart[index].quantity+=1;
                    quantity++;
                }
                
                return {...state,cart,quantity}

            }
        case DELETE_COUNT:
            {
                let cart = [...state.cart];
                let quantity = state.quantity;
                let index = cart.findIndex(c => c.id === action.data);
                if(index !==-1) {
                    if(cart[index].quantity === 1){
                        cart.splice(index, 1);
                    }
                    else{
                        cart[index].quantity-=1;
                    }
                    
                    quantity--;
                }
                return {...state, cart,quantity};
            }
        case FETCH_PRODUCTS:
            {
                return {...state}
            }
    }
}