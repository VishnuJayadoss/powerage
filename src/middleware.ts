// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware (request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const userId = request.cookies.get('user_id')?.value

  // Protected routes list
  const protectedPaths = ['/cart', '/profile', '/orders', '/checkout']

  const isProtected = protectedPaths.some(path =>
    request.nextUrl.pathname.startsWith(path)
  )

  if (isProtected && (!token || !userId)) {
    const loginUrl = new URL('/login', request.url)
    return NextResponse.redirect(loginUrl)
  }

  const LoginPaths = ['/login', '/otp']

  const isLogin = LoginPaths.some(path =>
    request.nextUrl.pathname.startsWith(path)
  )

  if (isLogin && (token || userId)) {
    const loginUrl = new URL('/', request.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}
