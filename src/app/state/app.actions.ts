import { createAction, props } from '@ngrx/store';

export const incrementSettings = createAction(
  '[Settings] Increement Setting',
  props<{settingName:string}>()
);

export const decrementSettings = createAction(
  '[Settings] Decreement Setting',
  props<{settingName:string}>()
);
  