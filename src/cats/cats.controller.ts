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

@Controller('cats')
export class CatsController {
  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<string> {
    await console.log(createCatDto);
    return 'This action creates a new cat';
  }

  @Get()
  async findAll(@Query() query: ListAllEntities): Promise<string> {
    await console.log(query);
    return 'This action return cats with query';
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
