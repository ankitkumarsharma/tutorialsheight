import { AppModelTypes, UserInfoTypes } from './../../config/app.types';
import { Action, createReducer, on } from '@ngrx/store';  
import { changeServiceNoAction } from '../actions/app.actions';
export const appDataKey = "appData";
export const initialState: UserInfoTypes = {
    userName: '',
    email: '',
    serviceNo: '01'
}
const appReducer = createReducer(
    initialState,
    on(changeServiceNoAction, (state:any,{payload}) =>{
        return {
            ...state,
            serviceNo: payload
        }
    }),
);
export function reducer(state: UserInfoTypes | undefined, action: Action) {
    return appReducer(state, action)
}