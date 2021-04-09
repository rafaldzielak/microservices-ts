# Albacross Microservice Test Task

The goal to of this project is to do the following:

1. Check why the test is failing and fix what's necessary


2. Add an endpoint that creates a `Lead` object that belongs to a user, here's an example of the `Lead` object:
```json
{
  "name": "Albacross",
  "domain": "albacross.com",
  "lastVisit": "2020-02-11 21:37:00"
}
```


3. Add an endpoint to find user using any of its text-based properties with his Leads included, e.g. if someone searches for `'joh'` it'll return user
```json
{
  "firstName": "John",
  "lastName": "Wick",
  "email": "john.wick@gmail.com",
  "leads": [
    {
      "name": "Albacross",
      "domain": "albacross.com",
      "lastVisit": "2020-02-11 21:37:00"
    }
  ]
}
```


4. (optional) If you want you can add any improvements as you see fit


If you have any questions feel free to reach out to us!

## Prerequisites
You need to have [Docker](https://www.docker.com/) installed to run the project

## Usage
To start the project just run:
```shell
$ yarn start
```

The API will be available on port 3250, if you want you can change it.

### Database (MySQL)
You can find the connection details in `src/db/config.js`

## Tests
To run the tests use:
```shell
$ yarn test
```

Optionally to run tests in watch mode:
```shell
$ yarn test --watch
```

## Linter
To use linter use:
```shell
$ yarn lint
```
