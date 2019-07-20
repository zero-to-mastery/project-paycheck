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
  }
}));

const FinancialCatergoryPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography align="center" variant="h4">
            Finances Breakdown
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={4}>
            {FORM_CONFIGS.map(({ name, layout }) => (
              <Grid key={name} item>
                <FinancialCategoryForm title={name} layout={layout} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default React.memo(FinancialCatergoryPage);
