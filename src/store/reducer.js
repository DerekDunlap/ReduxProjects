const initialState={
    counter:0
}

const reducer=(state=initialState,action)=>{
    if(action.type=='INCREMENT'){
        return{
            ...state,
            counter:state.counter+1
        }
    }else if(action.type=='DECREMENT'){
        return{
            ...state,
            counter:state.counter-1
        }
    }else if(action.type=='ON_ADD_COUNTER'){
        return{
            ...state,
            counter:state.counter+action.payload
        }
    }
    else if(action.type=='ON_SUBTRACT_COUNTER'){
        return{
            ...state,
            counter:state.counter-action.payload
        }
    }
    return state
}

export default reducer