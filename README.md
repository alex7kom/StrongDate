# StrongDate.js

A wrapper for Date.

You supply it with a correct timestamp.

```js
var StrongDate = SD(timestamp);
```

It uses this timestamp to calculate correct time if time on a user device is wrong.

You use it just like the standard Date.

```js
var myDate = new StrongDate();
myDate.toString(); // 'Sat Jul 11 2015 16:47:30 GMT+0548 (AREA 51)'
```

You don't use it if you don't understand what this wrapper does and potential edge cases.

## License

MIT
