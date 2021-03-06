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
      },
      randomTerms:[]
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
    expect(result).toEqual({
      termsPerCategory: 1,
      termsPerTopic: 1,
      numberOfTopics: 1,
      maxCategoryTerms: 1,
      maxTopicTerms: 1,
      maxTopics: 1
    });
  });
  
  it("should select termsPerCategory", () => {
    const result = fromSelectors.selectTermsPerCategory(initialState);
    expect(result).toEqual(1);
  });

  it("should select termsPerTopic", () => {
    const result = fromSelectors.selectTermsPerTopic(initialState);
    expect(result).toEqual(1);
  });
  
  it("should select numberOfTopics", () => {
    const result = fromSelectors.selectNumberOfTopics(initialState);
    expect(result).toEqual(1);
  });
  
  it("should select maxCategoryTerms", () => {
    const result = fromSelectors.selectMaxCategoryTerms(initialState);    
    expect(result).toEqual(1);
  });
  
  it("should select maxTopicTerms", () => {
    const result = fromSelectors.selectMaxTopicTerms(initialState);
    expect(result).toEqual(1);
  });
  
  it("should select maxTopics", () => {
    const result = fromSelectors.selectMaxTopics(initialState);
    expect(result).toEqual(1);
  });
});