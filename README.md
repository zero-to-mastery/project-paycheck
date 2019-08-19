# project_paycheck

a paycheck-to-paycheck breakdown of income and expenses

## Tech-stack

- React / Redux
- Node / Express
- MongoDB / Mongoose
- PM2
- Material UI

## Description

Project Paycheck is a tool for people to plan and have a better understanding of their finances. It'll have a breakdown of incomes and expenses for the next few paychecks, this'll allow users to see where their money is being spent for the next paycheck, Enabling the user to make informed spending decisions.

Will have two main views:

1. Breakdown of total income, expenses, and savings for a given range (weekly, monthly, etc)
2. Breakdown of single paychecks with information regarding which expenses will be taken from it.This will help people to determine if they can afford extra spending for that week or not.

## Architecture

#### modern three tier

![Image of Three Tier Architecture](https://dichotomyy.github.io/imgs/threetier.PNG)

## Story points:

- I can input all my monthly expenses
- I can see my expenses separated from income and paycheck breakdown
- I can input my income
- I can input multiple incomes
- I can see my incomes separated from expenses and paycheck breakdown
- I can see a breakdown of all income and expenses with a balance at the end
- I can change the breakdown from daily, weekly, bi-weekly, monthly and yearly
- I can see the percentage and amount I am saving
- I can make an account to remember all my information
- I can log into my account with my email
- I can see a breakdown of my next paycheck that will show my income for that check and all the expenses that will be paid by that check
- I can easily edit both income and expenses

# Project setup

Set upstream for your fork to point to the original repository. [Directions](https://help.github.com/en/articles/fork-a-repo)

Install dependencies in both `client` and `server` folders with the `npm install` command

## Database

Make sure to have MongoDB installed locally or connect to your own cloud hosted database

- Local:
  - Installation directions for [Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
  - Installation directions for [Mac](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
  - Installation directions for [Linux](https://docs.mongodb.com/manual/administration/install-on-linux/)
- Cloud:
  - MongoDB [Atlas](https://docs.atlas.mongodb.com/getting-started/)

## Requirements to start the server

- The project is using .env file to store configuration variables. You need to rename .env-example to .env to get started.
- Replace the values in .env with your actual values to connect to the database:

```
DB_USER=user
DB_HOST=localhost:27017
DB_PASSWORD=password
```

- If you are using the local database, you need to create a user in mongoDB database in order to create a connection with authentication, for example:

### launch mongo shell with this command in the terminal

```
mongo
```

### then create a user in the database

```
use projectpaycheck
db.createUser(
   {
     user: "accountUser",
     pwd: "password",
     roles: [ "readWrite", "dbAdmin" ]
   }
)
```

# How to contribute

- Fork the repo
- Set upstream to point to the original repo, read [this](https://help.github.com/en/articles/fork-a-repo)
- Add yourself to the `contributors.json` file
- Pick a ticket from the backlog column on Trello and assign yourself to it
  - You can also make a ticket on Trello and work on that, just make sure to label it with the "non-outlined work" label
  - Make sure no one else is working on the same task
- Make changes to your repo
- When done, submit a PR to the original repository
- If your task involved the UI, include a screenshot with your PR
- Move your ticket to "ready-to-merge" column

## Notes:

- If you have any questions, contact notAnkur (notAnkur#6968) on Discord
- Make sure to have the Prettier extension installed so that your code will autoformat according to the config file
- Please keep PRs small so that code reviews will be managable

## Helpful Reading List:

- [How to use Git with a team](https://medium.com/@francesco.agnoletto/how-to-not-f-up-your-local-files-with-git-part-1-e0756c88fd3c)
- [Rules of React](https://gist.github.com/sebmarkbage/75f0838967cd003cd7f9ab938eb1958f)
- [React, Redux and JS Architecture](https://jrsinclair.com/articles/2018/react-redux-javascript-architecture/)
- [Redux Tutorial](https://egghead.io/courses/getting-started-with-redux)
- [React Router](https://reacttraining.com/react-router/web/guides/philosophy)
- [React DOCs](https://reactjs.org/docs/getting-started.html)
- [Create-React-App DOCs](https://facebook.github.io/create-react-app/docs/getting-started)
- [React-Router DOCs](https://reacttraining.com/react-router/web/guides/quick-start)
- [Redux DOCs](https://redux.js.org/introduction/getting-started)
- [React-Redux DOCs](https://react-redux.js.org/introduction/quick-start)
