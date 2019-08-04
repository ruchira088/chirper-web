
export default interface User {
    readonly userId: string
    readonly username: string
    readonly firstName: string
    readonly lastName?: string
    readonly email: string
    readonly profileImageId?: string
}