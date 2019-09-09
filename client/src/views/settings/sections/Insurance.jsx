import React from 'react';
import { FormControl, MenuItem, Select, Typography } from "@material-ui/core";

const Insurance = ({ style, insurance, handleInsurance }) => {
    return (
        <FormControl className={style}>
            <Typography>
                Includes health insurance?
                </Typography>
            <Select
                value={insurance}
                onChange={handleInsurance}
            >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
            </Select>
        </FormControl>
    );
}

export default Insurance;