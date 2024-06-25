const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "Harshita ",
      pass: "@#12#@",
    },
  });

  let info = await transporter.sendMail({
    from: '"" <harshitasthana9@gmail.com>', // sender address
    to: "iam@gmail.com", // list of receivers
    subject: "", // Subject line
    text: "", // plain text body
    html: "<b>Hello World</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;
