import { NextResponse } from "next/server";
export function POST(req, res) {
	console.log(req.body);
	let nodemailer = require("nodemailer");

	const transporter = nodemailer.createTransport({
		host: "localhost", //use localhost for linux cPanel hosting
		port: 25,
		secure: false,
		// no need for authentication
		tls: {
			rejectUnauthorized: false,
		},
	});
	const mailData = {
		from: req.body.email,
		to: "info@kohstudio.in",
		subject: `Message From ${req.body.name}`,
		text: req.body.message,
		html: <div>{req.body.message}</div>,
	};
	transporter.sendMail(mailData, function (err, info) {
		if (err) console.log(err);
		else console.log(info);
	});
	return NextResponse.json({ id: 1 });
	// res.status(200);
}
