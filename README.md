# datetime-locale

Formats dates so that they can be used on `<input type="datetime-locale">` elements. Particularly useful when working with libraries like React to bind value states. The format necessary is described in detail in the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Local_date_and_time_strings).

Works on both the client and server, but should really only be used on the client since these strings do not contain timezone information. If you send these to the server and your users are in a different timezone then you may be in a whole lot of trouble.

## Usage

### Convert a date to datetime-locale compatible string

```js
const datetimeLocale = require('datetime-locale')
console.log(datetimeLocale.toString(new Date()));
// 2020-01-06T10:33:38
```

### Convert an input value into a javascript date

```js
const datetimeLocale = require('datetime-locale');
const localeString = document.getElementById("dateInput").value;
console.log(datetimeLocale.fromString(localeString));
// Mon Jan 06 2020 10:33:38 GMT-0800 (Pacific Standard Time)
```

### Example usage with React

```js
import datetimeLocale from 'datetime-locale';


const ControlledDateTimeInput = () => {
  const [date, setDate] = useState(new Date());
  
  const handleInputChange = (e) => {
    setDate(datetimeLocale.fromString(e.target.value));
  }

  return <input type="datetime-locale" value={datetimeLocale.toString(date)} />

}

```