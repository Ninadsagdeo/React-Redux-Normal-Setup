import * as actionsTypes from '../actionsTypes';

const initialState ={
    loggedIn:false
}

const onBoarding = (state=initialState,action) =>{
    switch(action.type){
        case actionsTypes.LOGINCHECK:
            return {
                ...state,
                loggedIn:action.data
            }
        case actionsTypes.LOGINSUCCESS:
            return {
                ...state,
                loggedIn:true
            }
        default:
        return{
            ...state,
        }
    }
}

export default onBoarding;