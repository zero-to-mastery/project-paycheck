import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";
// Styles
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 250,
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
  date,
  expenses = [],
  totalIncome = 0,
  debtPaid = [],
  income = 0
}) => {
  const classes = useStyles();

  const parseDate = dateToParse => `${dateToParse.getMonth()}/ ${dateToParse.getDay()}`;
  const totalExpenses = expenses.reduce((accumulator, { value }) => accumulator + value, 0);
  const totalDebtPaid = debtPaid.reduce((accumulator, { amount }) => accumulator + amount, 0);

  return (
    date > new Date() && (
      <Card className={classes.card}>
        <CardHeader title={`Paycheck ${parseDate(date)}`} className={classes.header} />
        <CardContent className={classes.cardContent}>
          <Typography>{`Total income: ${income}`}</Typography>
          <List>
            <Typography>{`Total expenses: ${totalExpenses}`}</Typography>
            {expenses.map((expense, index) => {
              const paidClass = expense.paid ? classes.expensePaid : "";
              return (
                <ListItemText key={index} className={`${classes.listItem} ${paidClass}`}>{`${
                  expense.description
                }: ${expense.value}`}</ListItemText>
              );
            })}
          </List>
          <List>
            <Typography>{`Debt Paid: ${totalDebtPaid}`}</Typography>
            {debtPaid.map((debt, index) => (
              <ListItemText key={index + debt.description} className={classes.listItem}>{`${
                debt.description
              }: ${debt.amount}`}</ListItemText>
            ))}
          </List>
        </CardContent>
      </Card>
    )
  );
};
PaycheckCard.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
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
export default PaycheckCard;
