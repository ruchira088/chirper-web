
export default interface UserService {
    usernameExists(username: string): Promise<Boolean>
}