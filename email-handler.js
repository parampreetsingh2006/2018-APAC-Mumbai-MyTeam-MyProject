var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: 'scrumassistant01@gmail.com',
    pass: 'H@ck2018'
  }
});




var sendEmail = function(session,emailBody) {

  var mailOptions = {
      from: 'scrumassistant01@gmail.com',
      to: 'khushboo_peswani@outlook.com',
      subject: 'Minutes Of Meetings',
      text: "Html",
      html: emailBody
  };

  transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    session.send('Email Sent successfully');
  }
});
}

module.exports.sendEmail = sendEmail;
