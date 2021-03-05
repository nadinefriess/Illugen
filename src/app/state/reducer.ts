import { createReducer, on } from '@ngrx/store';
import { AppState} from '../state/state';
import { appState } from '../../assets/initial-state';
import { incrementSettings,decrementSettings } from './actions';


export const initialState: AppState = appState;

export const appReducer = createReducer(
  initialState,
  on(incrementSettings, (state, { settingName }) => {
    switch(settingName){
      case 'termsPerCategory': {
        var termsPerCategory = state.settings.termsPerCategory + 1;
        var settings = {...state.settings, termsPerCategory};
        return {...state, settings};
      }
      break;
      case 'termsPerTopic':{
        var termsPerTopic = state.settings.termsPerTopic + 1;
        var settings = {...state.settings, termsPerTopic};
        return {...state, settings};
      }
      break;
      case 'numberOfTopics':{
        var numberOfTopics = state.settings.numberOfTopics + 1;
        var settings = {...state.settings, numberOfTopics};
        return {...state, settings};
      }
      break;
      default: state;
    }
  }),
  on(decrementSettings, (state, { settingName }) => {
    switch(settingName){
      case 'termsPerCategory': {
        var termsPerCategory = state.settings.termsPerCategory - 1;
        var settings = {...state.settings, termsPerCategory};
        return {...state, settings};
      }
      break;
      case 'termsPerTopic':{
        var termsPerTopic = state.settings.termsPerTopic - 1;
        var settings = {...state.settings, termsPerTopic};
        return {...state, settings};
      }
      break;
      case 'numberOfTopics':{
        var numberOfTopics = state.settings.numberOfTopics-1;
        var settings = {...state.settings, numberOfTopics};
        return {...state, settings};
      }
      break;
      default: state;
    }
  }),
);
