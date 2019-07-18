const fs = require("fs");
const path = require("path");
const faker = require("faker");
const moment = require("moment");
const times = 10;

// declare collections here
const expenses = [];
const debt = [];

// generate fake data inside the loop
for (let i = 0; i < times; i++) {
  // generate fake expenses
  expenses.push({
    id: i + faker.random.alphaNumeric(),
    description: faker.commerce.productName(),
    value: faker.commerce.price(),
    createdAt: moment(faker.date.between(moment(), moment().add(25, "d"))).valueOf(),
    paid: faker.random.boolean()
  });
  debt.push({
    id: faker.random.alphaNumeric(),
    description: faker.random.word(),
    amount: faker.random.number(400)
  });
}
// Add collectiont to fake db
const data = JSON.stringify({ expenses, debt });
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
