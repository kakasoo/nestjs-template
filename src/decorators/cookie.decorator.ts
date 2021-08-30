import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// Use with cookie-parser
export const Cookie = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.cookies;
  },
);
