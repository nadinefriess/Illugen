import { Reducer, Action } from 'redux';
import { AppState } from '../types/app.state';
import {
  GENERATE_LIST_OF_RANDOM_TERMS
} from '../actions/app.actions';
import * as State from "../../assets/initial-state";


const initialState: AppState = State.initialState;

// Create your reducer that will handle changes to the state
export const appReducer: Reducer<AppState> =
  (state: AppState = initialState, action: Action): AppState => {
    switch (action.type) {
        case GENERATE_LIST_OF_RANDOM_TERMS:
          return state;
        default:
    }
    return state;
  };