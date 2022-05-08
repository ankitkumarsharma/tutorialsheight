
import { Action, createReducer, on } from '@ngrx/store'; 
import { HomePageTypes } from '../config/landing.types';
export const landingKey = "landing";
export const initialState: HomePageTypes = {
    title: "",
    slides: 0,
    post: []
}
const landingReducer = createReducer(
    initialState,
    // on(homeAction.saveHomeTitle, (state:any,{payload}) =>{
    //     return {
    //         ...state,
    //         homeTab: payload
    //     }
    // }),
);
export function reducer(state: HomePageTypes | undefined, action: Action) {
    return landingReducer(state, action)
}