# λ serverless-boilerplate

A quick boilerplate for Serverless with support for Typescript, Jest, and offline mode.

Includes a `/ping` endpoint as an example.

## quick start

```
yarn && yarn dev
```
Installs dependencies and starts the dev server in offline mode.

You should now be able to access the api locally:
[http://localhost:4000/api/ping](http://localhost:4000/api/ping)

## available scripts
---

```
yarn dev
```
Starts the dev server in offline mode.

---

```
yarn test
```
Runs the test runner once.

---

```
yarn test:watch
```
Runs the test runner in watch mode.

---

```
yarn test:coverage
```
Runs the test runner once, and generates a coverage report.

---

```
yarn lint
```
Runs the linter once, and displays warnings.

---

```
yarn lint:fix
```
Runs the linter once, and attempts to auto-fix warnings.

---

```
yarn prettier
```
Runs prettier once, and displays warnings.

---

```
yarn prettier:write
```
Runs prettier once, and writes changes. This is also a pre-commit hook.

---