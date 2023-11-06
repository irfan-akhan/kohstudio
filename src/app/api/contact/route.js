let nodemailer = require("nodemailer");
import { NextResponse, NextRequest } from "next/server";
export async function POST(req) {
	const data = await req.json();
	let transporter = nodemailer.createTransport({
		host: "shahjeefood.com",
		port: "465",
		secure: true,
		auth: {
			user: "info@shahjeefood.com",
			pass: "Shahjeefood1234",
		},
	});

	transporter.verify(function (error, success) {
		if (error) {
			console.log("verfiy", error);
		} else {
			console.log("Server is ready to take our messages");
		}
	});
	const mailData = {
		from: data.name,
		to: "info@shahjeefood.com",
		subject: `Message From ${data.name}`,
		text: data.message,
		html: `<div>${data.message}</div> <table
		id="zs-output-sig"
		border="0"
		cellpadding="0"
		cellspacing="0"
		style="
			font-family: Arial, Helvetica, sans-serif;
			line-height: 0px;
			font-size: 1px;
			padding: 0px !important;
			border-spacing: 0px;
			margin: 0px;
			border-collapse: collapse;
			width: 500px;
		"
	>
		<tbody>
			<tr>
				<td style="padding: 0px !important">
					<table
						id="inner-table"
						border="0"
						cellpadding="0"
						cellspacing="0"
						style="
							font-family: Arial, Helvetica, sans-serif;
							line-height: 0px;
							font-size: 1px;
							padding: 0px !important;
							border-spacing: 0px;
							margin: 0px;
							border-collapse: collapse;
						"
					>
						<tbody>
							<tr>
								<td
									style="
										border-collapse: collapse;
										font-family: Arial, Helvetica,
											sans-serif;
										font-size: 12px;
										font-style: normal;
										line-height: 14px;
										font-weight: 400;
										padding-bottom: 14px;
									"
								>
									<span
										style="
											font-family: Arial, Helvetica,
												sans-serif;
											font-size: 12px;
											font-style: normal;
											line-height: 14px;
											font-weight: 400;
											color: #354052;
											display: inline;
										"
										>Kind Regards,</span
									>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
			<tr>
				<td style="padding: 0px !important">
					<table
						id="inner-table"
						border="0"
						cellpadding="0"
						cellspacing="0"
						style="
							font-family: Arial, Helvetica, sans-serif;
							line-height: 0px;
							font-size: 1px;
							padding: 0px !important;
							border-spacing: 0px;
							margin: 0px;
							border-collapse: collapse;
						"
					>
						<tbody>
							<tr>
								<td width="187" style="padding-right: 20px">
									<table
										border="0"
										cellpadding="0"
										cellspacing="0"
										style="
											font-family: Arial, Helvetica,
												sans-serif;
											line-height: 0px;
											font-size: 1px;
											padding: 0px !important;
											border-spacing: 0px;
											margin: 0px;
											border-collapse: collapse;
										"
									>
										<tbody>
											<tr>
												<td
													style="
														border-collapse: collapse;
														line-height: 0px;
														padding-right: 1px;
													"
												>
													<img
														height="60"
														width="187"
														alt="image"
														border="0"
														src="https://img2.gimm.io/2415c939-2a25-4e00-b54d-396628e0cf4d/img.png"
													/>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td
									style="
										border-collapse: collapse;
										background-color: #e87021;
										width: 2px;
										vertical-align: super;
										padding: 0px !important;
									"
								></td>
								<td
									style="
										border-collapse: collapse;
										padding-right: 20px;
									"
								></td>
								<td style="padding: 0px !important">
									<table
										border="0"
										cellpadding="0"
										cellspacing="0"
										style="
											font-family: Arial, Helvetica,
												sans-serif;
											line-height: 0px;
											font-size: 1px;
											padding: 0px !important;
											border-spacing: 0px;
											margin: 0px;
											border-collapse: collapse;
										"
									>
										<tbody style="margin-bottom: 10px">
											<tr>
												<td
													style="
														border-collapse: collapse;
														font-family: Arial,
															Helvetica,
															sans-serif;
														font-size: 14px;
														font-style: normal;
														line-height: 16px;
														font-weight: 700;
														padding-bottom: 2px;
													"
												>
													<span
														style="
															font-family: Arial,
																Helvetica,
																sans-serif;
															font-size: 14px;
															font-style: normal;
															line-height: 16px;
															font-weight: 700;
															color: #354052;
															display: inline;
														"
														>Kohstudio</span
													>
												</td>
											</tr>
										</tbody>
									</table>
									<table
										border="0"
										cellpadding="0"
										cellspacing="0"
										style="
											font-family: Arial, Helvetica,
												sans-serif;
											line-height: 0px;
											font-size: 1px;
											padding: 0px !important;
											border-spacing: 0px;
											margin: 0px;
											border-collapse: collapse;
										"
									>
										<tbody>
											<tr>
												<td
													style="
														border-collapse: collapse;
														padding-bottom: 2px;
													"
												></td>
											</tr>
										</tbody>
									</table>
									<table
										border="0"
										cellpadding="0"
										cellspacing="0"
										style="
											font-family: Arial, Helvetica,
												sans-serif;
											line-height: 0px;
											font-size: 1px;
											padding: 0px !important;
											border-spacing: 0px;
											margin: 0px;
											border-collapse: collapse;
										"
									>
										<tbody>
											<tr>
												<td
													style="
														padding-right: 8px;
													"
												>
													<img
														height="24"
														width="24"
														alt="website"
														border="0"
														src="https://img2.gimm.io/1cfe0deb-49a2-422f-860a-cce55b80cff6/img.png"
													/>
												</td>
												<td
													style="
														padding: 0px !important;
													"
												>
													<span
														style="
															font-family: Arial,
																Helvetica,
																sans-serif;
															font-size: 12px;
															font-style: normal;
															line-height: 14px;
															font-weight: 400;
															color: #354052;
															display: inline;
														"
														>www.kohstudio.io&nbsp;</span
													>
												</td>
											</tr>
											<tr>
												<td
													style="
														border-collapse: collapse;
														padding-bottom: 2px;
													"
												></td>
											</tr>
										</tbody>
									</table>
									<table
										border="0"
										cellpadding="0"
										cellspacing="0"
										style="
											font-family: Arial, Helvetica,
												sans-serif;
											line-height: 0px;
											font-size: 1px;
											padding: 0px !important;
											border-spacing: 0px;
											margin: 0px;
											border-collapse: collapse;
										"
									>
										<tbody>
											<tr>
												<td
													style="
														padding-right: 8px;
													"
												>
													<img
														height="24"
														width="24"
														alt="map"
														border="0"
														src="https://img2.gimm.io/5899dca2-9212-4250-8d65-4401b7176746/img.png"
													/>
												</td>
												<td
													style="
														padding: 0px !important;
													"
												>
													<span
														style="
															font-family: Arial,
																Helvetica,
																sans-serif;
															font-size: 12px;
															font-style: normal;
															line-height: 14px;
															font-weight: 400;
															color: #354052;
															display: inline;
														"
													>
														Hawal
														Srinagar&nbsp;</span
													>
												</td>
											</tr>
											<tr>
												<td
													style="
														border-collapse: collapse;
														padding-bottom: 2px;
													"
												></td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
			<tr>
				<td style="border-collapse: collapse; padding-bottom: 16px">
					<span></span>
				</td>
			</tr>
		</tbody>
	</table>`,
	};
	try {
		const response = await transporter.sendMail(mailData);
		console.log("send mail", response);
	} catch (error) {
		console.log(" mail error", error);
		return NextResponse.json(
			{ message: "failure" },
			{
				status: 400,
			}
		);
	}
	return NextResponse.json(
		{ message: "success" },
		{
			status: 200,
		}
	);
}
