import { NextResponse } from "next/server";

export function middleware(req) {
  const isAuth = req.cookies.get("token");
  if (req.nextUrl.pathname.startsWith("/recipes/create") && !isAuth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/recipes/create"],
};
