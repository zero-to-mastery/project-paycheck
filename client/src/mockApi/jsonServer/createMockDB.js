const fs = require("fs");
const path = require("path");
const faker = require("faker");
const times = 10;

// declare collections here
const expenses = [];

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
}
// Add collectiont to fake db
const data = JSON.stringify({ expenses });
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
