# Sails-Dev-Env

A Sails.js development environment.


## Notes
`static/` should contain all static raw data that the API needs.
`api/libraries/` should contain all custom library functions used in `api/`.

#### Documentation
Documentation generation used is [apidoc](http://apidocjs.com/)

#### ESLint
The rules for eslint are based on Airbnb, with some modifications in `.eslintrc`

#### Unit testing
[Mocha](https://mochajs.org/#getting-started), [Chai](http://chaijs.com/api/) ([chai-as-promised](https://github.com/domenic/chai-as-promised)), [Sinon](http://sinonjs.org/releases/v4.1.3/).

#### Integration testing
[Supertest](https://github.com/visionmedia/supertest)


## Scripts
`npm run doc [dir]` to generate the documentation.
`npm run lint` to lint the project.
