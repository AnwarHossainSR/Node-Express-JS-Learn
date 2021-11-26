var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "quickstoreshop.bd@gmail.com",
    pass: "H4Ubuzf5DeheSHx",
  },
});

var mailOptions = {
  from: "quickstoreshop.bd@gmail.com",
  to: "mahedianwar@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
