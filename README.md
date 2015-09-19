# StrongDate

A wrapper for Date to calculate a near correct timezone if timezone on a user device is wrong.

This is a big issue for countries that recently changed their timezone(s). There are many phones, and tablets, and even PCs that do not update (especially Android devices). 
And also some users don't know how (or care) to choose their timezone correctly and instead change time to match their local time. 

## How StrongDate works

You supply it with a correct timestamp.

```js
var StrongDate = SD({ timestamp: 1442685785698 });
```

And then use it just like the standard Date.

```js
var myDate = new StrongDate();
myDate.toString(); // 'Sat Jul 11 2015 16:47:30 GMT+0548 (AREA 51)'
```

`StrongDate` stores two Date objects inside, the first holds correct UTC time, and the second object with the local time (we assume that observable time is right for the user).
Basically `StrongDate` redirects all methods that deal with UTC to the first object, and all local methods to the second object.
It also calculates timezone offset between those.

## Installation

Download [the latest version](https://github.com/Alex7Kom/StrongDate/releases/latest) from Github or use npm or Bower:

```
npm install strongdate
```

Then just include `dist/strongdate.js` or `dist/strongdate.min.js` in your html. AMD-version of the library that also supports Browserify also available as `dist/strongdate-amd.js`/`dist/strongdate-amd.min.js`.

## API

### SD(options)

`SD` function accepts an options object, which can include:

* `timestamp` is the correct timestamp you obtain from your server. You'll need to take into account network latency, and deal with it yourself.

* `offset` is a precalculated offset in milliseconds.

* `threshold` is a threshold value in milliseconds. StrongDate will kick in only if the absolute value of the offset is larger than this. Defaults to 10 min

Either `timestamp` or `offset` is required.
`SD` returns `StrondDate` only if timestamp is correct or offset is larger than a threshold. Otherwise it returns standard `Date`.

### StrongDate

`StrongDate` has pretty much the same API as `Date`, so in most cases you can add it drop-in in your project.

The only exceptions are static methods of `Date` (`now`, `UTC`, `parse`) that currently are not implemented.

`StrongDate` also exposes `_offset` property which value you can cache and supply to `SD` on the next run.

## Important note

Note that this library is experimental in some sense. The things may and __will__ go wrong if not only time but user date is different, so always do test if you can rely on it in your particular case.

## License

MIT
