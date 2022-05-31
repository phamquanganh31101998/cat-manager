//import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

// Class Middleware
// @Injectable()
//export class LoggerMiddleware implements NestMiddleware {
//  use(req: Request, res: Response, next: NextFunction) {
//    console.log('Request', req);
//    console.log('Response', res);
//    next();
//  }
//}

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Request incoming...');
  next();
}
