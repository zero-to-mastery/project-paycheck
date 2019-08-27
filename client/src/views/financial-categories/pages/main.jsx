import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import FinancialCategoryForm from "views/financial-categories/forms/category-form";

import WantsConfig from "views/financial-categories/layout/want";
import ExpensesConfig from "views/financial-categories/layout/expense";
import NeedsConfig from "views/financial-categories/layout/need";
import DebtConfig from "views/financial-categories/layout/debt";
import IncomeConfig from "views/financial-categories/layout/income";

const FORM_CONFIGS = [ExpensesConfig, IncomeConfig, DebtConfig, NeedsConfig, WantsConfig];

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  cardContainer: {
    overflow: "auto",
    margin: "10px",
    //padding: "10px"
  },
  header: {
    margin: 20
  }
}));

const FinancialCatergoryPage = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.header}>
        <Typography align="center" variant="h4">
          Finances Breakdown
        </Typography>
      </div>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} />
          <Grid item xs={12}>
            <Grid container justify="center"  >
              {FORM_CONFIGS.map(({ name, layout }) => (
                <Grid key={name} item className={classes.cardContainer}>
                  <FinancialCategoryForm title={name} layout={layout} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default React.memo(FinancialCatergoryPage);
