export interface AppState {
    categoryList: Category[],
    topicList: Topic[]
}

export interface Category{
    category:string,
    term:string[],
    numberOfTermns:number
} 

export interface Topic {
    topic:string, 
    term:string[],
    numberOfTermns:number,
    active:boolean
}
