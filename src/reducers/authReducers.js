import {SIGN_IN,SIGN_OUT} from '../actions/types'
const INITIAL_VALUE={
    isSignedIn:null
}
export const authReducers =(state=INITIAL_VALUE,action)=>{
    switch(action.type){
        case SIGN_IN :return {...state,isSignedIn:true}
        case SIGN_OUT:return {...state,isSignedIn:false}
        default : return state
    }

}