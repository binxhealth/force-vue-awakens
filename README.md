# force-vue-awakens
> Every generation has a story

## Contributing

* Select an issue to work on (or open your own) and comment to let others know
  that you are working on it.
* Fork the repository, commit to master, add `#<issue number>` to commit
  messages, and create a pull request.
* Add [Jest](https://facebook.github.io/jest/en/) tests where appropriate.
* Code style: [StandardJS](https://standardjs.com/)
* Use comments thoughtfully.

## Setup

1. Clone the repository.
2. Run `yarn`.
3. Run `yarn start`.
4. Navigate to `http://localhost:8080`

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

## Testing

Run all tests:

```
npm test
```

Run only Jest tests:

```
npm run test:unit
```

Run a sepcific Jest test:

```
npm run test:unit -- tests/home.test.js
```

Update the snapshots of Jest snapshot tests:

```
npm run test:unit -- -u
```


## Acknowledgement

* Data is from [The Star Wars API (SWAPI)](https://swapi.co).
* Images are from [Star Wars: A Visual Guide](https://starwars-visualguide.com).
* This is a sequel to [force-vue](https://github.com/alexkramer/force-vue).
