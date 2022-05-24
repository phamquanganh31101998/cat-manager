import { Controller, Get, Req, Post, Header } from '@nestjs/common';
import { Request } from 'express';
@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats in the database hehe';
  }

  @Post()
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action creates a new cat';
  }
}
