# Basic Todo App

This is learn project about Full-Stack with A-TDD 

---

## Technologies 

- Gauge & Taiko for Acceptance test

### Front-End

 - Vue js
 - Jest for Unit testing

### Back-End

- Node js
- Express js 
- Mongoose 
- Jest for unit testing

---

## Setup and Usage

- Clone this repo to your desktop
- You should add `./client` and `./api` directory to `.env` according to `.env.example` 

### Acceptance Test

You can find test script in `acceptance-test.js` and you can run `taiko acceptance-test.js ` or go to `./test-gauge`  and run `npm run test` 

### Client

- Go to `./client` directory and run `npm install` to install all the dependencies.

- For unit test run `npm run test:unit`

- You can find test code in  `./client/tests/unit` directory 
- Once the dependencies are installed, you can run `npm run build` for production

### Api

- Go to `./api`  directory and run `npm install` to install all the dependencies.
- Once the dependencies are installed, you can run  `npm start` to start the application. You will then be able to access it at localhost:5000
- For unit test run `npm run test`
- You can find test code in `./api/__test__` directory 

