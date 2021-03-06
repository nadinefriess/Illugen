import { createAction, props } from '@ngrx/store';

export const incrementSettings = createAction(
  '[Settings] Increment Setting',
  props<{settingName:string}>()
);

export const incrementSettingsSuccess = createAction(
  '[Settings] Increment Setting Success',
  props<{settingName:string}>()
);

export const decrementSettings = createAction(
  '[Settings] Decrement Setting',
  props<{settingName:string}>()
);
  
export const decrementSettingsSuccess = createAction(
  '[Settings] Decrement Setting Success',
  props<{settingName:string}>()
);

export const createRandomTerms = createAction(
  '[App] Create Random Terms'
);

export const createRandomTermsSuccess = createAction(
  '[App] Create Random Terms Success',
  props<{randomTerms:string[]}>()
);