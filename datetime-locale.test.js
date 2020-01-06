var datetimeLocale = require("./index");

test("toString produces correct datetime in local timezone", function() {
  var dateString = "2020-01-06T18:33:38.686Z";
  var localeString = datetimeLocale.toString(new Date(dateString));
  var offsetMinutes = new Date().getTimezoneOffset();
  var offsetTime = new Date(
    new Date(dateString).getTime() - (60000 * offsetMinutes)
  );
  expect(localeString).toBe(offsetTime.toISOString().split(".")[0]);
});

test("toString and fromString have equal values", function() {
  var now = new Date();
  var localeString = datetimeLocale.toString(now);
  expect(datetimeLocale.fromString(localeString).toString()).toBe(
    now.toString()
  );
});
