import UserService from "./UserService";
import Axios from "axios";

class ChirperUserService implements UserService {
    usernameExists(username: string): Promise<Boolean> {
        return Promise.resolve(true);
    }
}