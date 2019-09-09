if (process.env.NODE_ENV !== 'production') require("dotenv").config(); 
const express = require("express"); 
const cookieParser = require("cookie-parser"); 
const logger = require("morgan"); 
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet"); 
const mockDB = require("./createMockDB")

const expenses = require('./controllers/expenses');
const debts = require('./controllers/debts');

const app = express();

// If you want to use a database on the cloud then just chage this URL to point to it
const databaseUrl = `mongodb://${process.env.DB_HOST}/projectpaycheck`;
const databaseOptions = {
  useNewUrlParser: true,
  user: process.env.DB_USER,
  pass: process.env.DB_PASSWORD
};

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose
  .connect(databaseUrl, databaseOptions)
  .then(() => console.log("Connected to the database"))
  .catch(err => {
    console.log(`Could not connect to the database: ${err.message}`);
    process.exit();
  });



app.use(helmet());
app.use(logger("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res)=> { res.send("ITS WORKING") });
app.get('/expenses', (req, res) => { expenses.getAllExpenses(req, res, mockDB)});
app.get('/expenses/:id', (req, res) => { expenses.getExpense(req, res, mockDB)});
app.post('/expenses/', (req, res) => { expenses.addExpense(req, res, mockDB)});
app.get('/debts', (req, res) => { debts.getAllDebts(req, res, mockDB)});
app.get('/debts/:id', (req, res) => { debts.getDebt(req, res, mockDB)});
app.post('/debts/', (req, res) => { debts.addDebt(req, res, mockDB)});

app.listen(process.env.PORT || 5000, ()=> {
  console.log(`app is running on port ${process.env.PORT || 5000}`);
})