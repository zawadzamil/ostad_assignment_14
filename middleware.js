import { NextResponse } from "next/server";

export async function middleware(req, res) {

    if (req.nextUrl.pathname.startsWith('/api/profile')) {
        try {
            const header = new Headers(req.headers);
            
            const token = header.get('Token');
            const Key = new TextEncoder().encode(process.env.JWT_KEY)
            const decoded = await jwtVerify(token, Key);
            return NextResponse.next();

        }
        catch (e) {
            return NextResponse.json({ status: "failed", message: "Invalid User" }, {
                status: 401
            })
        }
  }
}
