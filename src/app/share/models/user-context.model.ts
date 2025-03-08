import {KeycloakUserInfo} from '../../core/authorization/models/keycloak-user-info.model';

export class UserContext {
    username: string;
    id: string;
    firstName: string;
    lastName: string;
    email: string;

    constructor(userInfo: KeycloakUserInfo) {
        this.id = userInfo.sub;
        this.username = userInfo.preferred_username;
        this.firstName = userInfo.given_name;
        this.lastName = userInfo.family_name;
        this.email = userInfo.email;
    }
}
