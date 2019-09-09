const getAllDebts = (req, res, mockDB) => {
  return res.status(200).json(mockDB.debts);
};

const getDebt = (req, res, mockDB) => {
  const { id } = req.params;
  const i = mockDB.debts.findIndex(debt => debt.id == id);
  if (i == -1) {
    return res.status(400).json("not found");
  }
  return res.status(200).json(mockDB.debts[i]);
};

const addDebt = (req, res, mockDB) => {
  const { debt } = req.body;
  mockDB.debts.push(debt);
  return res.status(200).json("debt added");
};

module.exports = {
  getAllDebts,
  getDebt,
  addDebt
};
