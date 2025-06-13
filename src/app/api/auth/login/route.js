import { SignJWT } from "jose";
import { NextResponse } from "next/server";

const users = [{ id: 1, email: "Ammar@gmail.com", password: "qweasdzxc" }];
export async function POST(req) {
  const secret = new TextEncoder().encode("your-secret-key");
  const { email, password } = await req.json();
  try {
    if (!email || !password) {
      return NextResponse.json({
        error: "invalid cradentials",
        status: 400,
      });
    }
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) {
      return NextResponse.json({
        error: "Invalid Cradentials",
        status: 400,
      });
    }
    const token = await new SignJWT({
      userId: user.id,
      email: user.email,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1d")
      .sign(secret);
    const response = NextResponse.json({
      message: "Login successful",
      user: { id: user.id, email: user.email },
    });
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 1,
    });
    return response;
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Failed to login please come after 2 minutes" },
      { status: 500 }
    );
  }
}
