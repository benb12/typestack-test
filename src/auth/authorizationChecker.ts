import { Request } from "express";
import { Action } from "routing-controllers";

/**
 * Checks whether the request is authorized.
 * @param action The action.
 * @param roles The roles required for the endpoint.
 */
export default async function checkAuth(
    action: Action, 
    roles: string[]
): Promise<boolean> {
    const req: Request = action.request;
    if (req.cookies['session']) {
        const jwt = req.cookies['session'];

        // verify JWT and check roles match
        // should still set user property on request
        
        return true;
    } else {
        return false;
    }
}