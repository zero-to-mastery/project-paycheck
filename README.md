# project_paycheck

a paycheck-to-paycheck breakdown tool of income and expenses

## Tech-stack

- React
- Redux
- Node / Express
- MongoDB
- PM2
- Material UI

## Description

Tool to budget and plan your next few paychecks. The idea is to give a better
understanding of where their money is needed for those who live paycheck to paycheck.

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

## Notes:

- Make sure to have the Prettier extension installed so that your code will autoformat accorrding to the config file
- Make sure to have MongoDB installed locally or add your own URL to the connect function. Please leave the default connect function when submitting a PR
