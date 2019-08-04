import UserService from "./UserService";

const EXISTING_USERNAME = "john"

export default class StubUserService implements UserService {
    usernameExists(username: string): Promise<Boolean> {
        return Promise.resolve(username === EXISTING_USERNAME);
    }
}