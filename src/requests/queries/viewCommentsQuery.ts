import { IsBoolean, IsInt, IsOptional, IsPositive } from "class-validator";

/**
 * Query parameters to view a page of a user's comments.
 */
export class ViewCommentsQuery {
    @IsInt()
    id?: number;

    @IsInt()
    @IsPositive()
    @IsOptional()
    limit?: number;

    @IsBoolean()
    @IsOptional()
    ascending: boolean = true;
}