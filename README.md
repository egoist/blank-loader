# blank-loader

[![NPM version](https://img.shields.io/npm/v/blank-loader.svg?style=flat-square)](https://npmjs.com/package/blank-loader) [![NPM downloads](https://img.shields.io/npm/dm/blank-loader.svg?style=flat-square)](https://npmjs.com/package/blank-loader) [![Build Status](https://img.shields.io/circleci/project/egoist/blank-loader/master.svg?style=flat-square)](https://circleci.com/gh/egoist/blank-loader)

## Use Case

When your want to strip out the contents of specific files from your bundle file.

## Install

```bash
$ npm install --save blank-loader
```

## Usage

```js
{
  module: {
    loaders: [
      // strip css out
      {test: /\.css$/, loader: 'blank'}
    ]
  }
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
