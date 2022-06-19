import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ForbiddenException,
  UseFilters,
} from '@nestjs/common';
import { CreateCatDto, UpdateCatDto } from './dtos';
import { CatsService } from './cats.service';
import { Cat } from './interfaces';
import { AllExceptionFilter } from 'src/common/exceptions/http-exception.filter';

@Controller('cats')
@UseFilters(AllExceptionFilter)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<void> {
    throw new ForbiddenException();
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    throw new ForbiddenException();
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
