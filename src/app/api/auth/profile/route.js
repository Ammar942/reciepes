import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function GET() {
  console.log(555);
  try {
    const cookiesStore = await cookies();
    console.log("🚀 ~ GET ~ cookiesStore:", cookiesStore);
    const token = cookiesStore.get("token")?.value;
    console.log(token);
    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const secret = new TextEncoder().encode("your-secret-key");

    const { payload } = await jwtVerify(token, secret);
    console.log(payload);
    return NextResponse.json({
      id: payload.userId,
      email: payload.email,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
