import { Authorized, Body, CurrentUser, Get, JsonController, NotFoundError, Post, QueryParams } from "routing-controllers";
import { PostCommentBody } from "../requests/bodies/postCommentBody";
import { ViewCommentsQuery } from "../requests/queries/viewCommentsQuery";

@JsonController('/user')
export default class UserController {

    /**
     * Demo profile endpoint.
     * @param user The current user.
     * @returns The user profile details.
     */
    @Get('/profile')
    //@Authorized() commented out for demo
    ownProfile(@CurrentUser() user: any) {
        return {
            status: 'success',
            name: user.name,
            email: user.email
        };
    }

    /**
     * Demo view comments endpoint.
     * @param query The query params.
     * @returns List of the user's comments.
     */
    @Get('/view_comments')
    viewComments(
        @QueryParams() query: ViewCommentsQuery
    ) {
        if (query.id === 0) {
            throw new NotFoundError('User not found');
        }

        // do something with query.limit
        // sort according to query.ascending

        return {
            status: 'success',
            comments: [`This is a comment made by user with id ${query.id}`]
        };
    }

    /**
     * Demo post comment endpoint.
     * @param body The request body.
     * @returns Demo success message.
     */
    @Post('/post_comment')
    postComment(
        @Body() body: PostCommentBody
    ) {
        return {
            status: 'success',
            message: `Uploaded comment ${body.content}`
        };
    }
}