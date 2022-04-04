const initialState ={
    product : []
}
const listproductReducer = (state =initialState , action) =>{
    switch(action.type){
        case "ADD_LIST_PRODUCT":{
            state.product = action.payload;
            return {...state}
        }
        default:
            return state;
    }
}
export default listproductReducer