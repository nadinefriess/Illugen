import { createSelector } from "@ngrx/store";
import { State, AppState } from "./state";

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

export const selectRendomTerms = createSelector(
    (state: State) => state.app,
    (app: AppState) => app.randomTerms
);

export const selectTermsPerCategory = createSelector(
    (state: State) => state.app,
    (app: AppState) => app.settings.termsPerCategory
); 

export const selectTermsPerTopic = createSelector(
    (state: State) => state.app,
    (app: AppState) => app.settings.termsPerTopic
); 

export const selectNumberOfTopics = createSelector(
    (state: State) => state.app,
    (app: AppState) => app.settings.numberOfTopics
); 

export const selectNumberOfCategories = createSelector(
    (state: State) => state.app,
    (app: AppState) => app.settings.numberOfCategories
); 

export const selectMaxCategoryTerms = createSelector(
    (state: State) => state.app,
    (app: AppState) => app.settings.maxCategoryTerms
); 

export const selectMaxTopicTerms = createSelector(
    (state: State) => state.app,
    (app: AppState) => app.settings.maxTopicTerms
); 

export const selectMaxTopics = createSelector(
    (state: State) => state.app,
    (app: AppState) => app.settings.maxTopics
); 

export const selectMaxCategories = createSelector(
    (state: State) => state.app,
    (app: AppState) => app.settings.maxCategories
); 