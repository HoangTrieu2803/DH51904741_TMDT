const initialState ={
    product : []
}
const detailReducer = (state =initialState , action) =>{
    switch(action.type){
        case "ADD_PRODUCT":{
            state.product = action.payload;
            return {...state}
        }
        default:
            return state;
    }
}
export default detailReducer