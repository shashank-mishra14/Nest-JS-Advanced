import { IsString, IsInt, Length } from "class-validator";

export class CreatePropertyDto{

    @IsString()
    @Length(5, 20)
    name:string;

    @IsString()
    description:string;

    @IsInt()
    price:number;
}