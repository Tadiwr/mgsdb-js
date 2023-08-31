/**
 * An entity that holds information for a the dashboard user
 */

export class DashbaordUser {
    id : number;
    email : string;
    permission_level : string;

    constructor(id : number, email : string, perm_level : string) {
        this.id = id;
        this.email = email;
        this.permission_level = perm_level;
    }
}