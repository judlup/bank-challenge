import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LargeDepositMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (
      req.method === 'POST' &&
      req.path.includes('/deposit') &&
      req.body &&
      req.body.amount >= 10000
    ) {
      console.log(
        `LargeDepositMiddleware: One transaction was made by ${req.body.userId} with amount ${req.body.amount}`,
      );
    }
    next();
  }
}
