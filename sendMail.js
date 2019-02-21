const nodemailer = require("nodemailer");
const { username, password } = require("./credentials");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: username,
		pass: password
	}
});

module.exports = mailOptions => {
	transporter.sendMail(mailOptions, function(err, info) {
		if (err) console.log(err);
		else console.log(info);
	});
};
