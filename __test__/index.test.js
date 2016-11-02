const path = require('path')
const webpack = require('webpack')

function cwd(file) {
  return path.resolve(process.cwd(), file)
}

test('main', () => {
  return new Promise(resolve => {
    webpack({
      entry: cwd('./__test__/fixture/fixture.js'),
      output: {
        path: cwd('./__test__/dist'),
        filename: 'output.js',
        libraryTarget: 'commonjs2'
      },
      module: {
        loaders: [
          {test: /\.css$/, loader: process.cwd()}
        ]
      }
    }, (err, stats) => {
      expect(err).toBe(null)
      const output = require('./dist/output')
      expect(output).toBe('')
      resolve()
    })
  })
})
