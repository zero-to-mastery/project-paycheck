const fs = require("fs");
const path = require("path");
const faker = require("faker");
const times = 10;

// declare collections here
const expenses = [];
const debt = [];
// generate fake data inside the loop
// this is an old fashion for loop but the alternatives using
// ES6 I think are to complex
for (let i = 0; i < times; i++) {
  // generate fake expenses
  expenses.push({
    id: i,
    description: faker.commerce.productName(),
    value: faker.commerce.price(),
    createdAt: faker.date.future(),
    paid: faker.random.boolean()
  });
  debt.push({
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
