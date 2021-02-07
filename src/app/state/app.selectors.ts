import { createSelector } from "@ngrx/store";
import { State, AppState } from "./app.state";

export const selectApp = createSelector(
    (state: State)=> state.app,
    (app: AppState)=> app
)

export const selectCategories = createSelector(
    (state: State) => state.app,
    (app: AppState) => app.categories
);

export const selectTopics = createSelector(
    (state: State) => state.app,
    (app: AppState) => app.topics
); 

export const selectSettings = createSelector(
    (state: State) => state.app,
    (app: AppState) => app.settings
); 