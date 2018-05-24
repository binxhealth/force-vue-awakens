# force-vue-awakens
>

## Guidelines:

* Code style: [StandardJS](https://standardjs.com/)

## Setup

1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Navigate to `http://localhost:8080`

## Testing

Run all tests:

```sh
npm test
```

Run only [Jest](https://facebook.github.io/jest/en/) tests:

```sh
npm run test:unit
```

Run a sepcific Jest test:

```sh
npm run test:unit -- tests/home.test.js
```

Run only [Cypress](https://www.cypress.io/) tests:

```sh
npm run test:e2e
```

Run Cypress interactive GUI:

```sh
npx cypress open
```
