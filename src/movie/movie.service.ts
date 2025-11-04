import { Injectable, NotFoundException } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
import { CreateMovieDto } from './dto/create-movie';
import { UpdateMovieDto } from './dto/update-movie';
import { PrismaService } from 'src/prisma/Prisma.service';
// import { CreateMovieDto, UpdateMovieDto } from './dto';

@Injectable()
export class MovieService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateMovieDto) {
    return this.prisma.movie.create({ data: dto });
  }

  async findAll() {
    return this.prisma.movie.findMany();
  }

  async findOne(id: number) {
    const movie = await this.prisma.movie.findUnique({ where: { id } });
    if (!movie) throw new NotFoundException(`Movie with ID ${id} not found`);
    return movie;
  }

  async update(id: number, dto: UpdateMovieDto) {
    await this.findOne(id); // check existence
    return this.prisma.movie.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id); // check existence
    return this.prisma.movie.delete({ where: { id } });
  }
}
