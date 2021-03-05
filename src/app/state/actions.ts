import { createAction, props } from '@ngrx/store';

export const incrementSettings = createAction(
  '[Settings] Increment Setting',
  props<{settingName:string}>()
);

export const decrementSettings = createAction(
  '[Settings] Decrement Setting',
  props<{settingName:string}>()
);
  