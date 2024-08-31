import { NextResponse, userAgent } from 'next/server';
import type { NextRequest } from 'next/server';
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const { device } = userAgent(request);
    const viewport = device.type === 'mobile' ? 'mobile' : 'desktop';
    const url = request.nextUrl;
    url.searchParams.set('viewport', viewport);
    
    return NextResponse.rewrite(url);
};
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: '/:path*',
};