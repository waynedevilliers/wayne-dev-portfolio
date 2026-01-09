import { intlayerMiddleware } from 'next-intlayer/middleware';
import { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  return intlayerMiddleware(request);
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|images|favicon.ico).*)',
};
