# force-vue-awakens
> Every generation has a story.

## Contributing

* Code style: [StandardJS](https://standardjs.com/)
* Select an issue to work on (or open your own) and comment to let others know that you are working on it.
* Fork the repository, commit to master, add `#<issue number>` to commit
  messages, and create a single pull request (even for multiple issues).
* Add [Cypress](https://www.cypress.io/) and/or
  [Jest](https://facebook.github.io/jest/en/) tests where appropriate.
* Use comments thoughtfully.

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

Run only Jest tests:

```sh
npm run test:unit
```

Run a sepcific Jest test:

```sh
npm run test:unit -- tests/home.test.js
```

Run only Cypress tests:

```sh
npm run test:e2e
```

Run Cypress interactive GUI:

```sh
npx cypress open
```

## Acknowledgement

* Data is from [The Star Wars API (SWAPI)](https://swapi.co/).
* Images are from [Star Wars: A Visual Guide](https://starwars-visualguide.com).
* This is a sequel to [force-vue](https://github.com/alexkramer/force-vue).
