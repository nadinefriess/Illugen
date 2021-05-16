import * as fromReducer from './reducer';
import * as fromActions from './actions';

describe('AppReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const {initialState} = fromReducer;
      const action = { type: 'Unknown'};
      const state = fromReducer.appReducer(initialState, action);
      expect(state).toBe(initialState);
      expect(state).toEqual(initialState);
    });
  });

  describe('createRandomTermsSuccess action', ()=>{
    it('should return state in an immutable way with a random term list', ()=>{
      const {initialState} = fromReducer;
      const payload = ["Term1","Term2"];
      const newState = {...initialState, randomTerms:["Term1","Term2"]};
      const action =  fromActions.createRandomTermsSuccess({randomTerms:payload});
      const state = fromReducer.appReducer(initialState, action);
      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });

  describe('incrementSettingsSuccess action', ()=>{
    it('should increment setting termsPerCategory', ()=>{
      const {initialState} = fromReducer;
      const payload = 'termsPerCategory';
      const newState = {...initialState, settings: {...initialState.settings, termsPerCategory: 2}};
      const action =  fromActions.incrementSettingsSuccess({settingName: payload});
      const state = fromReducer.appReducer(initialState, action);
      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });

  describe('decrementSettingsSuccess action', ()=>{
    it('should decrement setting termsPerCategory', ()=>{
      const {initialState} = fromReducer;
      const payload = 'termsPerCategory';
      const startingState = {...initialState, settings: {...initialState.settings, termsPerCategory: 3}};
      const action =  fromActions.decrementSettingsSuccess({settingName: payload});
      const state = fromReducer.appReducer(startingState, action);
      expect(state.settings.termsPerCategory).toEqual(2);
      expect(state).not.toBe(startingState);
    });
  });
});