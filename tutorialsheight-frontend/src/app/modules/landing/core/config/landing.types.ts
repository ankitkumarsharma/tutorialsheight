export interface LandingTypes {
    Home?: HomePageTypes
}
export interface HomePageTypes {
    title: string,
    slides: number
    post: PostTypes[]
}
export interface PostTypes {
    title: string,
    category: string,
    tags: Array<any>,
    url: string
}