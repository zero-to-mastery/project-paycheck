import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";

import { tableIcons } from "views/financial-categories/icons/material-table-icons";

const useStyles = makeStyles(() => ({
  card: {
    height: "auto",
    minWidth: 200
  }
}));

const FinancialCategoryForm = ({ title, layout }) => {
  const [state, setState] = useState({
    data: [
      { item: "Utilities", amount: 200.95, dueDate: "08/15/2019" },
      {
        item: "Groceries",
        amount: 50.35,
        dueDate: "08/05/2019"
      }
    ]
  });

  const addRow = async newData => {
    const data = [...state.data];
    data.push(newData);
    setState({ ...state, data });
  };

  const updateRow = async (newData, oldData) => {
    const data = [...state.data];
    data[data.indexOf(oldData)] = newData;
    setState({ ...state, data });
  };

  const rowDelete = async oldData => {
    const data = [...state.data];
    data.splice(data.indexOf(oldData), 1);
    setState({ ...state, data });
  };

  const classes = useStyles();
  const totalAmount = state.data.reduce((total, item) => (total += parseFloat(item.amount)), 0.0);

  return (
    <Card className={classes.card}>
      <MaterialTable
        icons={tableIcons}
        title={title}
        columns={layout}
        data={state.data}
        editable={{
          onRowAdd: async newData => await addRow(newData),
          onRowUpdate: async (newData, oldData) => await updateRow(newData, oldData),
          onRowDelete: async oldData => await rowDelete(oldData)
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

FinancialCategoryForm.prototypes = {
  title: PropTypes.string.isRequired,
  layout: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      field: PropTypes.string.isRequired,
      type: PropTypes.string
    })
  ).isRequired
};

export default FinancialCategoryForm;
