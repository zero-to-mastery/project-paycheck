import React, { useState } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";

const useStyles = makeStyles(() => ({
  card: {
    height: "auto",
    minWidth: 200
  }
}));

const FinancialCategoryForm = ({ title, layout }) => {
  const [state, setState] = useState({
    data: [
      { item: "Utilities", amount: 200.95, dueDate: "08.15.2019" },
      {
        item: "Groceries",
        amount: 50.35,
        dueDate: "08.05.2019"
      }
    ]
  });

  const classes = useStyles();
  const totalAmount = state.data.reduce((total, item) => (total += parseFloat(item.amount)), 0.0);

  return (
    <Card className={classes.card}>
      <MaterialTable
        title={title}
        columns={layout}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.push(newData);
                setState({ ...state, data });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data[data.indexOf(oldData)] = newData;
                setState({ ...state, data });
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.splice(data.indexOf(oldData), 1);
                setState({ ...state, data });
              }, 600);
            })
        }}
        options={{
          search: false
        }}
      />
      <CardContent>
        <Typography align="right" color="textSecondary">
          {`Total: ${totalAmount.toFixed(2)}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FinancialCategoryForm;
