const moment = require('moment');

function formatMessage(username, text) {
  const time = moment().utcOffset('+01:00').format('h:mm A'); // Set Nigeria time zone (WAT) offset

  return {
    username,
    text,
    time: ` ${time}`,
  };
}

module.exports = formatMessage;
