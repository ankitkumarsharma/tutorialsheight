import { ActionReducer, ActionReducerMap, INIT, MetaReducer } from "@ngrx/store";
import { localStorageSync } from "ngrx-store-localstorage";
import { AppModelTypes } from "../../config/app.types";
import * as appReducer from './app.reducers';

export const reducers: ActionReducerMap<AppModelTypes> = {
    config: appReducer.reducer
}
export function localStorageSyncReducer(redcer: ActionReducer<AppModelTypes>): ActionReducer<AppModelTypes>{
    return localStorageSync({
        keys: [appReducer.appDataKey],
        rehydrate: true,
        storage: sessionStorage,
    })(redcer);
}
// for on refresh data will not lost
export const hydrationMetaReducer = (
    reducer: ActionReducer<AppModelTypes>
  ): ActionReducer<AppModelTypes> => {
    return (state, action) => {
      if (action.type === INIT) {
        const storageValue = sessionStorage.getItem("state");
        if (storageValue) {
          try {
            return JSON.parse(storageValue);
          } catch {
            sessionStorage.removeItem("state");
          }
        }
      }
      const nextState = reducer(state, action);
      sessionStorage.setItem("state", JSON.stringify(nextState));
      return nextState;
    };
  };
export const metaReducers: Array<MetaReducer<any, any>> = [
    localStorageSyncReducer,
    hydrationMetaReducer
];