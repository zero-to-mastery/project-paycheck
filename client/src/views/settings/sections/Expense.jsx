import React from 'react';
import { FormControl, FormControlLabel, Radio, Typography } from "@material-ui/core";

const Expense = ({ style, expense, handleExpense }) => {
    return (
        <FormControl className={style}>
            <Typography>
                Expenses taken from your paycheck?
                    </Typography>
            <FormControlLabel
                control={
                    <Radio
                        color="default"
                        checked={expense === "NOT_SELECT"}
                        onChange={handleExpense}
                        value="NOT_SELECT"
                    />
                }
                label="Not Selected"
            />
            <FormControlLabel
                control={
                    <Radio
                        color="default"
                        checked={expense === "SELECT"}
                        onChange={handleExpense}
                        value="SELECT"
                    />
                }
                label="Selected"
            />
            <FormControlLabel
                control={
                    <Radio
                        color="default"
                        checked={expense === "INTERMEDIATE"}
                        onChange={handleExpense}
                        value="INTERMEDIATE"
                    />
                }
                label="Intermediate"
            />
        </FormControl>
    );
}

export default Expense;