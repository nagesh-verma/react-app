import {ADD_PRODUCT,ADD_COUNT,DELETE_COUNT,FETCH_PRODUCTS} from '../constants/types'

export const addProduct = (product) => (dispatch)=>{
    let action = {type:ADD_PRODUCT,data:product}
    dispatch(action);
}

export const addCount = (id) => (dispatch)=>{
    let action = {type:ADD_COUNT,data:id}
    dispatch(action);
}

export const deleteCount = (id) => (dispatch)=>{
    let action = {type:DELETE_COUNT,data:id}
    dispatch(action);
}

export const fetchProducts = () => (dispatch)=>{
    let action = {type:FETCH_PRODUCTS}
    dispatch(action);
}