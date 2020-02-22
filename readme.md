## Definition of *Done*

* All unit tests are passed.
* There is not *linting* error.
* Good code quality.
  * Meaningful names of `class`, variable and functions.
  * Using full name rather than abbreviation.
  * Using appropriate data structure.

## Hint

### Running Unit Test

If you want to run all the unit test, you can run:

```bash
$ npm test
```

If you want to run test which matches certain patterns, you can run:

```bash
$ npm test -- <pattern>
```

For example.

```bash
$ npm test -- receptionist
```

### Linting Your Code

You can use the following command to check if your code violates the coding standard:

```bash
$ npm run lint
```