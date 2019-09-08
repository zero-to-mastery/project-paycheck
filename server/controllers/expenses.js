const getAllExpenses = (req, res, mockDB) => {
  return res.status(200).json(mockDB.expenses);
};

const getExpense = (req, res, mockDB) => {
  const { id } = req.params;
  const i = mockDB.expenses.findIndex(expense => expense.id == id);
  if (i == -1) {
    return res.status(400).json("not found");
  }
  return res.status(200).json(mockDB.expenses[i]);
};

const addExpense = (req, res, mockDB) => {
  const { expense } = req.body;
  mockDB.expenses.push(expense);
  return res.status(200).json("expense added");
};

module.exports = {
  getAllExpenses,
  getExpense,
  addExpense
};
