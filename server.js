const http = require("http");
const url = require("url");
const sendMail = require("./sendMail");
http
	.createServer(async (req, res) => {
		res.writeHead(200, { "Content-Type": "text/html" });
		var q = url.parse(req.url, true).query;


		const mailOptions = {
			from: "umeshgmrl2@gmail.com",
			to: q.to, 
			subject: q.subject, 
			html: q.message
		};

		await sendMail(mailOptions);
		res.end(JSON.stringify(mailOptions));
	})
	.listen(8080);
