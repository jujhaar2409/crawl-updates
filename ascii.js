const figlet = require('figlet');

const jarvis = () => {
  const text = figlet.textSync(`JARVIS`);
  return text;
};

module.exports = { jarvis };
