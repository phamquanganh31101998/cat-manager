import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './dtos';
import { CatsService } from './cats.service';
import { Cat } from './interfaces';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<void> {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<string> {
    await console.log(id);
    return `This action returns the #${id} cat`;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCatDto: UpdateCatDto,
  ): Promise<string> {
    await console.log(updateCatDto);
    return `This action update the #${id} cat`;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    await console.log(id);
    return `This action remove a #${id} cat`;
  }
}
