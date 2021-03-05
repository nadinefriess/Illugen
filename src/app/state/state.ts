export interface State {
   app: AppState
}

export interface AppState {
    categories: Category[],
    topics: Topic[],
    settings: Settings
}

export interface Category{
    category:string,
    terms: string[]
} 

export interface Topic {
    topic:string, 
    terms:string[]
}

export interface Settings {
    termsPerCategory: number,
    termsPerTopic:number,
    numberOfTopics:number, //equals maxTopics
    maxCategoryTerms: number,
    maxTopicTerms: number,
    maxTopics: number
}
