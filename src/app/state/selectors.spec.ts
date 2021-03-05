import { State } from "./state";
import * as fromSelectors from './selectors';

describe("Selectors", () => {
  const initialState: State = {
    app:{
      categories:[{category:'Testcategory',terms: ['Testterm']}],
      topics:[{topic:'Testtopic',terms: ['Testterm']}],
      settings:{
        termsPerCategory: 1,
        termsPerTopic: 1,
        numberOfTopics: 1,
        maxCategoryTerms: 1,
        maxTopicTerms: 1,
        maxTopics: 1
      }
    }
  };

  it("should select the category list", () => {
    const result = fromSelectors.selectCategories(initialState);    
    expect(result.length).toEqual(1);
    expect(result[0].category).toEqual("Testcategory"); 
  });
  
  it("should select the topic list", () => {
    const result = fromSelectors.selectTopics(initialState);
    expect(result.length).toEqual(1);
    expect(result[0].topic).toEqual("Testtopic");
  });

  it("should select the settings", () => {
    const result = fromSelectors.selectSettings(initialState);
    expect(result.termsPerCategory).toEqual(1);
    expect(result.termsPerTopic).toEqual(1);
    expect(result.numberOfTopics).toEqual(1);
    expect(result.maxCategoryTerms).toEqual(1);
    expect(result.maxTopicTerms).toEqual(1);
    expect(result.maxTopics).toEqual(1);
  });
});