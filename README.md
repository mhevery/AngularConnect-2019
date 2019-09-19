# Angular Connect 2019

[Slides](https://docs.google.com/presentation/d/1o5W1sOaQ0HaPqleGCWy8cukgM5NhhRZWpx2E6KKrc10) for [How we make Angular fast](https://www.angularconnect.com/talks#misko-hevery).

[install v8 to get `d8`](https://github.com/GoogleChromeLabs/jsvu#readme)
```
nvm install v12
nvm use v12
npm install -g jsvu
jsvu v8
ln -l ~/.jsvu/v8 ~/.jsvu/d8
export D8_PATH=~/.jsvu
```

to install, compile and serve the repository
```
npm install
npm run install-v8-tools
npm run watch
npm run server
```

to get a list of `d8` options
```
node --v8-options
```

## `example1.js`

Demonstrates inlining.
```
node ./dist/example1.js 100000
node --v8-options | code -
node --trace-opt --trace-deopt ./dist/example1.js 10000000 | code -
```


## `example2.js`

Demonstrates stable numbers.
```
node ./dist/example2.js
```


## `example3.js`

Demonstrates inline-caching. [ip-processor](http://localhost:8080/v8/tools/ic-explorer.html)

```
node ./dist/example3.js
rm *.log; node --trace-ic ./dist/example3.js
```

Demonstrates profiling. [profview](http://localhost:8080/v8/tools/profview/index.html)

```
rm *.log; node --prof --no-turbo-inlining ./dist/example3.js; node --prof-process *.log 
rm *.log; node --prof --log-source-code ./dist/example3.js; ./v8/tools/mac-tick-processor --preprocess *.log > v8.json
rm *.log; node --prof --no-turbo-inlining --log-source-code ./dist/example3.js; ./v8/tools/mac-tick-processor --preprocess *.log > v8.json
```

## `example4.html`

Open [example4.html](http://localhost:8080/example4.html)