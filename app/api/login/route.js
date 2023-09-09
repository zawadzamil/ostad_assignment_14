import { NextResponse } from "next/server";
import { SignJWT } from 'jose'

export  async function POST(req, res) {
    const JsonBody =await req.json();

    let email = JsonBody['email'];
    let password = JsonBody['password'];

    console.log("Email" + email +" Password" +password)

    if (email == "demo@gmail.com" && password == "aA123456@") {
        // Create JWT Token
        const payload = { email: email };

        const Key =new TextEncoder().encode(process.env.JWT_KEY)
        let token = await new SignJWT(payload)
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setIssuer('https://localhost:3000')
            .setExpirationTime('2h')
            .sign(Key)

       return NextResponse.json({
            status: "success",
            message: "User Validated",
            token: token
        }, {
            status: 200
        });
    }

    else {
       return NextResponse.json({
            status: "failed",
            message: "User Unauthorized"
        }, {
            status: 401
        })
    }
}