import { ValidationError } from "class-validator";
import { Request, Response } from "express";
import { BadRequestError, ExpressErrorMiddlewareInterface, HttpError, Middleware } from "routing-controllers";

@Middleware({ type: 'after' })
export default class ErrorHandlerMiddleware implements ExpressErrorMiddlewareInterface {
    
    /**
     * Handles all errors.
     * @param error The error object.
     * @param req The request.
     * @param res The response
     */
    async error(
        error: HttpError, 
        req: Request, 
        res: Response,
        next: () => any
    ): Promise<void> {
        let message = error.message;
        if (message == `Invalid queries, check 'errors' property for more info.`) {
            const errors: ValidationError[] = (error as any).errors;
            const fields = errors.map(e => e.property).join(',');
            message = `Missing or invalid fields: ${fields}`;
        }

        // if debug
        console.log(`${error.name}: ${error.message}`);

        res.status(error.httpCode).send({
            status: 'failure',
            reason: message
        });
        next();
    }
}