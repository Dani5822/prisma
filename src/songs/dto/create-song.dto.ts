import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateSongDto {
    @IsNotEmpty()
    @IsString()
    Cim: string;
    @IsNotEmpty()
    @IsString()
    Szerzo: string;
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    Hossz: number;
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    Ar: number;
}
