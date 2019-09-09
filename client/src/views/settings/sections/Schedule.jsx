import React from 'react';
import { FormControl, MenuItem, Select, Typography } from "@material-ui/core";

const Schedule = ({ style, schedule, handleSchedule }) => {
    return (
        <FormControl className={style}>
            <Typography>
                Pay Schedule
                </Typography>
            <Select
                value={schedule}
                onChange={handleSchedule}
            >
                <MenuItem value={"WEEK"}>Weekly</MenuItem>
                <MenuItem value={"BIWEEK"}>Biweekly</MenuItem>
                <MenuItem value={"MONTH"}>Monthly</MenuItem>
            </Select>
        </FormControl>
    );
}

export default Schedule;