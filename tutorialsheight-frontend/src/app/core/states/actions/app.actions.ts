import { createAction, props } from "@ngrx/store";

export const sendEmptyAction = createAction(
    '[common action] send empty action'
);
export const changeServiceNoAction = createAction(
    '[common] change service no',
    props<{payload: string}>()
)