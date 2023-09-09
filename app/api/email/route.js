import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(req, res) {

    const JsonBody = await req.json();
    const clientEmail = JsonBody['email'];
    const clientPassword = JsonBody['password'];
    console.log(JsonBody);

    const transporter = nodemailer.createTransport({
        host: "mail.teamrabbil.com",
        port: 25,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "info@teamrabbil.com", // generated ethereal user
            pass: "~sR4[bhaC[Qs" // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: "<info@teamrabbil.com>", // sender address
        to: `${clientEmail}`, // list of receivers
        subject: "OSTAD TEST MAIL", // Subject line
        text: "Verify Your Email Address", // plain text body
        html: "<button>Verify</button>" // html body
    };

    try {
        let result = await transporter.sendMail(mailOptions);
        return NextResponse.json(
            {
                message: "Success",
                result: result
            }
        )
    }
    catch (error) {
        console.log(error);
    }

}