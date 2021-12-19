import { Authorized, Get, JsonController } from "routing-controllers";

@JsonController('/roles')
export default class RoleController {

    /**
     * Endpoint with no authorization.
     * @returns Demo message.
     */
    @Get('/not_authorized')
    notAuthorized() {
        return {
            message: 'This has no authorization'
        };
    }

    /**
     * Endpoint that requires the user to be signed in.
     * @returns Demo message.
     */
    @Get('/authorized')
    @Authorized()
    authorized() {
        return {
            message: 'You are authorized'
        };
    }

    /**
     * Endpoint that requires the user to be an admin.
     * @returns Demo message.
     */
    @Get('/admin')
    @Authorized('Admin')
    admin() {
        return {
            message: 'You are an admin'
        };
    }

    /**
     * Endpoint that requires the user to have two roles.
     * @returns Demo message.
     */
    @Get('/two_roles')
    @Authorized(['Role1', 'Role2'])
    twoRoles() {
        return {
            message: 'You have Role1 and Role2'
        };
    }
}