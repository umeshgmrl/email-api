Single command to run the app
-
`git clone git@github.com:umeshgmrl/email-api.git; \
cd email-api; \
npm install; \
echo "module.exports.username = 'your_email_here@gmail.com'; \nmodule.exports.password = 'your_email_password'; \nmodule.exports.key = 'secret_key';" > credentials.js; \
node server.js`