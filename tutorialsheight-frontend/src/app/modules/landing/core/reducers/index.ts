import { ActionReducer, ActionReducerMap, INIT, MetaReducer } from "@ngrx/store";
import { localStorageSync } from "ngrx-store-localstorage"; 
import { LandingTypes } from "../config/landing.types";
import * as landingReducer from './landing.reducers';

export const landingReducers: ActionReducerMap<LandingTypes> = {
    Home: landingReducer.reducer
}
export function localStorageSyncReducer(redcer: ActionReducer<LandingTypes>): ActionReducer<LandingTypes>{
    return localStorageSync({
        keys: [landingReducer.landingKey],
        rehydrate: true,
        storage: sessionStorage,
    })(redcer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [
    localStorageSyncReducer, 
];