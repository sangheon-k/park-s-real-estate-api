import { Request, Response, NextFunction } from "express";

type Func = (req: Request, res: Response, next: NextFunction) => Promise<any>;

const catchAsync = (func: Func) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(func(req, res, next)).catch(next);
  };
};

export { catchAsync };
