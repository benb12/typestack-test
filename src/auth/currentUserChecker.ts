import { Action } from "routing-controllers";

/**
 * Finds the current user behind a request.
 * @param action The action.
 */
export default async function checkUser(
    action: Action
): Promise<{}> {
    return {
        name: 'John Doe',
        email: 'johndoe@gmail.com'
    };

    // should actually just return the user we have already
    // set in the auth checker
    // return action.request.user;
}