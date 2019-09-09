import React from 'react';
import { FormControl, Input, InputAdornment, Typography } from "@material-ui/core";

const Tax = ({ style, tax, handleTax }) => {
    return (
        <FormControl className={style}>
            <Typography>
                Estimated Tax Percentage
                </Typography>
            <Input
                value={tax}
                onChange={handleTax}
                endAdornment={<InputAdornment position='end'>%</InputAdornment>}
            />
        </FormControl>
    );
}

export default Tax;