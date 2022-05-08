export interface AuthTypes {
    login?: LoginInfoTypes,
}
export interface LoginInfoTypes{
    user: string,
    email: string,
    password: string, 
}