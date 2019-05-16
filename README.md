# force-vue-awakens
> Every generation has a story

## Contributing

* Select an issue to work on (or open your own) and comment to let others know
  that you are working on it.
* Fork the repository, commit to master, add `#<issue number>` to commit
  messages, and create a pull request.
* Add Jest and/or WebdriverIO tests where appropriate.
* Code style: [StandardJS](https://standardjs.com/)
* Use comments thoughtfully.

## Setup

1. Clone the repository.
2. Run `yarn`.
3. Run `yarn start`.
4. Navigate to `http://localhost:8080`

## Configuring Babel

Before running anything, the Babel environment must be set

If starting the VueJS web application/running unit tests, set Babel environment to 'dev' using
`export BABEL_ENV=dev`

If running the e2e tests, set Babel environment to 'test' using
`export BABEL_ENV=test`

## Resources

Here are some software projects / technologies that are used in this
application:

1. [VueJS](https://vuejs.org): JavaScript framework.
2. [Vue Router](https://router.vuejs.org): VueJS routing library for Single
   Page Applications (SPA).
3. [Vuex](https://vuex.vuejs.org): State management library.
4. [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API):
   HTTP request API that is
   [polyfilled](https://en.wikipedia.org/wiki/Polyfill_(programming)) by
   [Unfetch]( https://npm.im/unfetch).
5. [Bootstrap](http://getbootstrap.com): Style toolkit.
6. [Jest](https://facebook.github.io/jest/en/): JavaScript testing framework.
7. [WebdriverIO](https://webdriver.io): WebDriver testing framework.

## Testing

Run all tests:

```console
yarn test
```

Run only Jest tests:

```console
yarn unit
```

Run a sepcific Jest test:

```console
yarn unit test/home.test.js
```

Update the snapshots of Jest snapshot tests:

```console
yarn unit -u
```

Run only WebdriverIO tests:

```console
yarn e2e
```

## Troubleshooting

If you're having problems with The Star Wars API erroring or being slow, you can
clone [@binxhealth/swapi][binxSwapiUrl] and run it locally with `yarn start`.
Then all you would have to do is swap the URLs, e.g. https://swapi.co/api/people
to http://localhost:8181/api/people.

## Acknowledgement

* Data is from [The Star Wars API (SWAPI)](https://swapi.co).
* Images are from [Star Wars: A Visual Guide](https://starwars-visualguide.com).
* This is a sequel to [force-vue](https://github.com/alexkramer/force-vue).

[binxSwapiUrl]: https://github.com/binxhealth/swapi/
