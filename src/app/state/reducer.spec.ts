import * as fromReducer from './reducer';
import { decrementSettings, incrementSettings } from './actions';

describe('AppReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const {initialState} = fromReducer;
      const action = { type: 'Unknown'};
      const state = fromReducer.appReducer(initialState, action);
      expect(state).toBe(initialState);
    });
  });

  describe('settings actions', () => {
    it('should increment setting and update the state in an immutable way', () => {
      const {initialState} = fromReducer;
      const action = incrementSettings({settingName:'termsPerCategory'});
      const state = fromReducer.appReducer(initialState, action);
      const newState = {...initialState, settings: {...initialState.settings, termsPerCategory: 3}}
      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });

    it('should decrement setting and update the state in an immutable way', () => {
      const {initialState} = fromReducer;
      const action = decrementSettings({settingName:'termsPerCategory'});
      const state = fromReducer.appReducer(initialState, action);
      const newState = {...initialState, settings: {...initialState.settings, termsPerCategory: 1}}
      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });
});