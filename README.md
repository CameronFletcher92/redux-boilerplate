Redux and React Transform Boilerplate
=====================

Boilerplate for a simple React counter application using:
* **[webpack](https://github.com/webpack/webpackwebpack)** for building
* **[babel](https://github.com/babel/babel)** for transpiling
* **[babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform)** for hotloading
* **[redux](https://github.com/rackt/redux)** for state management
* **[redux-devtools](https://github.com/gaearon/redux-devtools)** for action logging and time travelly goodness

## Getting Started

```
git clone https://github.com/cameronfletcher92/redux-boilerplate.git
cd redux-boilerplate
npm install
```

## NPM Scripts
```
npm run clean - cleans the build directory
npm run build - builds a production ready index.html and bundle.js
npm run start - run the server in production mode (serves the files built from 'npm run build')
npm run dev   - run the server in development mode with hotloading and injected redux devtools
```

## Demo of Redux Devtools

![](http://i.imgur.com/J4GeW0M.gif)

## Demo of React Transform

![](http://i.imgur.com/AhGY28T.gif)
