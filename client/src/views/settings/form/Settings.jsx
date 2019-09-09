import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Insurance from "../sections/Insurance";
import Expense from "../sections/Expense";
import Schedule from "../sections/Schedule";
import Tax from "../sections/Tax";

const useStyles = makeStyles(theme => ({
    forms: {
        display: 'block',
        margin: '20px'
    },
    button: {
        margin: theme.spacing(1)
    }
}));

const Settings = () => {
    const classes = useStyles();
    const [expense, setExpense] = useState("SELECT");
    const [insurance, setInsurance] = useState(true);
    const [tax, setTax] = useState(20);
    const [schedule, setSchedule] = useState("WEEK");

    const handleExpense = event => {
        setExpense(event.target.value);
    }
    const handleInsurance = event => {
        setInsurance(event.target.value);
    }
    const handleTax = event => {
        setTax(event.target.value);
    }
    const handleSchedule = event => {
        setSchedule(event.target.value);
    }
    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <form className="setting_container" style={{ margin: "0 auto", width: "50%" }} onSubmit={handleSubmit}>
            <div className="setting_header" style={{ margin: "20px" }}>
                <Typography align="center" variant="h4">
                    Settings
                </Typography>
            </div>
            <Schedule style={classes.forms} schedule={schedule} handleSchedule={handleSchedule} />
            <Expense style={classes.forms} expense={expense} handleExpense={handleExpense} />
            <Tax style={classes.forms} tax={tax} handleTax={handleTax} />
            <Insurance style={classes.forms} insurance={insurance} handleInsurance={handleInsurance} />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button className={classes.button} variant="contained" color="default" type="submit">Save</Button>
                <Button className={classes.button} variant="contained" color="primary">Cancel</Button>
            </div>
        </form>
    );
}

export default Settings;