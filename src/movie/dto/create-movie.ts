import { IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
// import { MovieType } from 'generated/prisma/enums';
import { MovieType } from '@prisma/client';

export class CreateMovieDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsEnum(MovieType)
  type: MovieType;

  @IsNotEmpty()
  @IsString()
  director: string;

  @IsOptional()
  @IsString()
  budget?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsString()
  duration?: string;

  @IsOptional()
  @IsString()
  yearTime?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  posterUrl?: string;


}
