import { Request, Response, NextFunction } from 'express';

/**
 * 功能中间件
 * 您的中间件不需要任何依赖项时，请考虑使用更简单的功能中间件替代方案
 */
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`);
  next();
}
