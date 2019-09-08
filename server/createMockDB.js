const faker = require("faker");
const moment = require("moment");

// declare collections here
const expenses = [];
const debts = [];
const times = 10;

// generate fake data inside the loop
for (let i = 0; i < times; i++) {
  // generate fake expenses
  expenses.push({
    id: i,
    description: faker.commerce.productName(),
    value: faker.commerce.price(),
    createdAt: moment(faker.date.between(moment(), moment().add(25, "d"))).valueOf(),
    paid: faker.random.boolean()
  });
  debts.push({
    id: i,
    description: faker.random.word(),
    amount: faker.random.number(400)
  });
}

module.exports = {
  expenses,
  debts
}