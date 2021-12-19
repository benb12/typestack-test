import { IsDate, IsString } from "class-validator";

/**
 * Request body to post a comment
 */
export class PostCommentBody {
    @IsString()
    content?: string;

    @IsDate()
    timestamp?: number;
}