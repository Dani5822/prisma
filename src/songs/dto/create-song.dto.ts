import { IsNotEmpty, IsNumber, IsPositive, IsString, Min } from "class-validator";

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
    @Min(0)
    Ar: number;
}
