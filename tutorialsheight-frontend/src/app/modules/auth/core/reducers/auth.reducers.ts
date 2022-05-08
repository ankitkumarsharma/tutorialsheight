import { LoginInfoTypes } from './../config/auth.types';

import { Action, createReducer, on } from '@ngrx/store';
export const authKey = "auth";
export const initialState: LoginInfoTypes = {
    user: '',
    email: '',
    password: '', 
}
const authReducer = createReducer(
    initialState,
    // on(homeAction.saveHomeTitle, (state:any,{payload}) =>{
    //     return {
    //         ...state,
    //         homeTab: payload
    //     }
    // }),
);
export function reducer(state: LoginInfoTypes | undefined, action: Action) {
    return authReducer(state, action)
}