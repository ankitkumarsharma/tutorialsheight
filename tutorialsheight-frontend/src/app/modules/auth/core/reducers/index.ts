import { ActionReducer, ActionReducerMap, INIT, MetaReducer } from "@ngrx/store";
import { localStorageSync } from "ngrx-store-localstorage"; 
import { AuthTypes } from "../config/auth.types";
import * as authReducer from './auth.reducers';

export const authReducers: ActionReducerMap<AuthTypes> = {
    login: authReducer.reducer
}
export function localStorageSyncReducer(redcer: ActionReducer<AuthTypes>): ActionReducer<AuthTypes>{
    return localStorageSync({
        keys: [authReducer.authKey],
        rehydrate: true,
        storage: sessionStorage,
    })(redcer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [
    localStorageSyncReducer, 
];