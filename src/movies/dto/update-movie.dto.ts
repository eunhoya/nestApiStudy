import { CreateMovieDto } from './create-movie.dto';
import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { fromEventPattern } from 'rxjs';
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

// readonly 읽기전용
