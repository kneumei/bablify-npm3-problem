# bablify-npm3-problem
demonstrates issue with bablify and npm3

To see the problem

using npm 3, do 
1. `npm install`
2. `node browserify.js`

The output looks like this:

```
...
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = 'ENTRY';

},{"./dep":undefined}]},{},[2,1]);
```

The reference to `"./dep"` is undefined. 

If you run this same project, but using npm 2 (e.g. node 4), You'll get output like this:

```
...
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = 'ENTRY';

},{"./dep":1}]},{},[2,1]);
```
