## Features

<dl>
  <dt>React Boilerplate</dt>
  <dd>All the good stuff from <a href="https://github.com/react-boilerplate/react-boilerplate">React Boilerplate</a>. Many thanks to its contributors.</dd>

  <dt>Common Folder</dt>
  <dd>Because I like it. I moved some files to app/utils too.</dd>

  <dt>More dynamic generators</dt>
  <dd>I improved containers' generator and its test template</dd>

  <dt>Jest config</dt>
  <dd>Jest the way I like it</dd>

  <dt>Typescript support</td>


## Added Typescript support

```javascript
// types for react libs
npm i --save-dev @types/react @types/react-dom @types/react-redux @types/react-router-dom

// install typescript
npm i --save-dev typescript

// create tsconfig.json
./node_modules/.bin/tsc --init

// install babel typescript preset
npm i --save-dev @babel/preset-typescript

// install webpack typescript loader
npm i --save-dev awesome-typescript-loader

// webpack.base.babel.js config
resolve: {
  extensions: ['.js', '.jsx', '.react.js', '.ts', '.tsx', '.json'],
},
module: {
  rules: [
    {
      test: /\.(js|jsx)$/, // Transform all .js and .jsx files required somewhere with Babel
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: options.babelQuery,
      },
    },
    {
      test: /\.(ts|tsx)$/, // Transform all .ts and .tsx files required somewhere with awesome-typescript-loader
      exclude: /node_modules/,
      use: 'awesome-typescript-loader',
    },
```
## License

This project is licensed under the MIT license, Copyright (c) 2019 Maximilian
Stoiber. For more information see `LICENSE.md`.
