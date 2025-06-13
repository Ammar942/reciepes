import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export default async function middleware(req) {
  const { pathname } = req.nextUrl;

  const protectedRoutes = ["/recipes/create"];
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtectedRoute) {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      const secret = new TextEncoder().encode("your-secret-key");
      await jwtVerify(token, secret); // validate token
      return NextResponse.next();
    } catch (error) {
      console.error("Invalid token:", error);
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/recipes/create"],
};
