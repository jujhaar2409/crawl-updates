const nodemailer = require('nodemailer');
const ascii = require('./ascii.js');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '<email>',
    pass: '<password>',
  },
});

const defaultMailOptions = {
  from: '<mailfrom>',
  to: '<mailto>',
};

function sendUpdateMail(items) {
  const options = {
    ...defaultMailOptions,
    subject: '🟢Update on IISc Admissions',
    html: `
    <p>Hi I'm JARVIS your personal assitant.</p>
    <p>There seems to be some new information of the IISc website regarding admissions. These are the three latest items:</p>
    <ul>
    <li>${items[0]}</li>
    <li>${items[1]}</li>
    <li>${items[2]}</li>
    </ul>
    <p>Find more information here: <a href="https://www.iisc.ac.in/admissions/">website</a></p>
    <hr />
    <pre>${ascii.jarvis()}</pre>
    `,
  };
  transporter.sendMail(options, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

function sendNoUpdateMail() {
  const options = {
    ...defaultMailOptions,
    subject: 'No update on IISc Admissions',
    html: `
    <p>Hi I'm JARVIS your personal assitant.</p>
    <p>There is no new update for you on the IISc website<p>
    <p>Find more information here: <a href="https://www.iisc.ac.in/admissions/">website</a></p>
    <hr />
    <pre>${ascii.jarvis()}</pre>
    `,
  };
  transporter.sendMail(options, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = {
  sendUpdateMail,
  sendNoUpdateMail,
};
