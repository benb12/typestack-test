import 'reflect-metadata';
import express from 'express';
import cookieParser from 'cookie-parser';
import { useExpressServer } from "routing-controllers";
import checkAuth from "./auth/authorizationChecker";
import checkUser from './auth/currentUserChecker';
import ErrorHandlerMiddleware from './middlewares/errorHandlerMiddleware';
import RoleController from './controllers/roleController';
import UserController from './controllers/userController';

const PORT = 3000;

const app = express();
app.use(cookieParser());

useExpressServer(app, {
    cors: {
        origin: '',
        credentials: true
    },
    defaultErrorHandler: false,
    controllers: [
        /**
         * Controller that demonstrates restricting endpoints to
         * certain roles.
         */
        RoleController,

        /**
         * Controller that demonstrates some user functionality, use of
         * query parameters and request bodies.
         */
        UserController
    ],
    middlewares: [
        /**
         * Custom error handler.
         */
        ErrorHandlerMiddleware
    ],
    authorizationChecker: checkAuth,
    currentUserChecker: checkUser
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});