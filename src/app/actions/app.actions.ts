import {
    Action,
    ActionCreator
  } from 'redux';
  
  export const GENERATE_LIST_OF_RANDOM_TERMS: string = 'GENERATE_LIST_OF_RANDOM_TERMS';
  export const generateListOfRandomTerms: ActionCreator<Action> = () => ({
    type: GENERATE_LIST_OF_RANDOM_TERMS
  });
  


