// src/app/api/set-session/route.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST (req: NextRequest) {
  const { token, userId } = await req.json()

  const response = NextResponse.json({ success: true })

  response.cookies.set('token', token, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 1, // 1 days
    sameSite: 'lax'
  })

  response.cookies.set('user_id', userId, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 1, // 1 days
    sameSite: 'lax'
  })

  return response
}
