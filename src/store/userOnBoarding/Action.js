import * as actionTypes from '../actionsTypes';

export const loginCheck= () =>{
    return {
        type: actionTypes.LOGINCHECK,
        payload:false
    }
}

export const loginSuccess= () =>{
    console.log('OKKKK');
    return {
        type: actionTypes.LOGINSUCCESS,
        payload:true,   
    }
    //this.props.history.push('/login');
}
