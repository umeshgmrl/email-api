const http = require("http");
const url = require("url");
const sendMail = require("./sendMail");
const PORT = 8080;
const { key } = require("./credentials");

http
	.createServer(async (req, res) => {
		res.writeHead(200, { "Content-Type": "text/json" });
		const q = url.parse(req.url, true).query;
		console.log(q.key === key)
		if (!(q.key === key)) {
			return res.end(
				JSON.stringify({
					success: false,
					error: "correct 'key' is required"
				})
			);
		}

		let mailOptions = {
			from: "umeshgmrl2@gmail.com",
			to: q.to,
			subject: q.subject,
			html: q.message
		};

		if (!(q.to && q.message)) {
			return res.end(
				JSON.stringify({
					success: false,
					error: "'to' and 'message' parameters are required"
				})
			);
		}

		const result = await sendMail(mailOptions);
		const success = result.accepted.length ? true : false;

		res.end(
			JSON.stringify({
				success,
				mailOptions
			})
		);
	})
	.listen(PORT, () => console.log(`server is started on ${PORT}`));
