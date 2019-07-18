import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";
import { fetchExpenses, saveExpense } from "../../redux/actions/expenses";
import { fetchDebts, saveDebt } from "../../redux/actions/debt";
// Styles
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
    margin: theme.spacing()
  },
  header: {
    textAlign: "center"
  },
  listItem: {
    margin: theme.spacing(0, 2)
  },
  cardContent: {
    marginLeft: "12%"
  },
  expensePaid: {
    textDecoration: "line-through"
  }
}));
export const PaycheckCard = ({
  date = new Date(),
  expenses = [],
  debt = [],
  fetchExpenses,
  saveExpense,
  fetchDebts,
  saveDebt
}) => {
  const classes = useStyles();
  // This income should be in the globalState
  const [income, setIncome] = useState(1000);
  useEffect(() => {
    fetchExpenses();
    fetchDebts();
  }, [fetchExpenses, fetchDebts]);

  const parseDate = dateToParse => `${dateToParse.getMonth()}/ ${dateToParse.getDay()}`;
  const totalExpenses = expenses.reduce(
    (accumulator, { value, paid }) => (paid ? accumulator : accumulator + value),
    0
  );
  const totalDebtPaid = debt.reduce((accumulator, { amount }) => accumulator + amount, 0);

  const handleToggleExpense = async (event, id) => {
    const expense = expenses.find(exp => exp.id === id);
    if (expense !== undefined) {
      // subtract or add from the totalIncome
      // should dispatch corresponding actions
      expense.paid ? setIncome(income + expense.value) : setIncome(income - expense.value);
      try {
        await saveExpense({ ...expense, paid: !expense.paid });
      } catch (error) {
        console.error(`error saving expense ${error} `);
      }
    }
  };
  return (
    /*date > new Date() &&*/ <Card className={classes.card}>
      <CardHeader title={`Paycheck ${parseDate(date)}`} className={classes.header} />
      <CardContent className={classes.cardContent}>
        <Typography>{`Total income: ${income}`}</Typography>
        <List>
          <Typography>{`Total expenses: ${totalExpenses}`}</Typography>
          {expenses.map((expense, index) => {
            const paidClass = expense.paid ? classes.expensePaid : "";
            return (
              <ListItemText
                key={index}
                className={`${classes.listItem} ${paidClass}`}
                onClick={event => handleToggleExpense(event, expense.id)}
              >{`${expense.description}: ${expense.value}`}</ListItemText>
            );
          })}
        </List>
        <List>
          <Typography>{`Debt Paid: ${totalDebtPaid}`}</Typography>
          {debt.map((debt, index) => (
            <ListItemText key={index + debt.description} className={classes.listItem}>{`${
              debt.description
            }: ${debt.amount}`}</ListItemText>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
PaycheckCard.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      createdAt: PropTypes.instanceOf(Date).isRequired,
      paid: PropTypes.bool.isRequired
    })
  ).isRequired,
  debtPaid: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired
    })
  ).isRequired,
  date: PropTypes.instanceOf(Date),
  income: PropTypes.number.isRequired
};

const mapStateToProps = state => ({ expenses: state.expenses, debt: state.debt });
const mapDispatchToProps = {
  fetchExpenses,
  saveExpense,
  fetchDebts,
  saveDebt
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaycheckCard);
