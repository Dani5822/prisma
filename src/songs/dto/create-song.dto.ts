import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Max, Min } from "class-validator";

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
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(5)
    ertekeles: number;
}
