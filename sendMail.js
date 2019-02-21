const nodemailer = require("nodemailer");
const { username, password } = require("./credentials");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: username,
		pass: password
	}
});

module.exports = async mailOptions => await transporter.sendMail(mailOptions);
