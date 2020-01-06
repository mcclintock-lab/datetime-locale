module.exports = {
  // inspired by https://stackoverflow.com/questions/24468518/html5-input-datetime-local-default-value-of-today-and-current-time
  toString: function(date) {
    var utcString = date.toISOString().substring(0, 19);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return (
      year +
      "-" +
      (month < 10 ? "0" + month.toString() : month) +
      "-" +
      (day < 10 ? "0" + day.toString() : day) +
      "T" +
      (hour < 10 ? "0" + hour.toString() : hour) +
      ":" +
      (minute < 10 ? "0" + minute.toString() : minute) +
      utcString.substring(16, 19)
    );
  },
  fromString: function(str) {
    return new Date(str);
  }
};
