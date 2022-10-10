import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};
const years = [
    2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000
  ];

const Select1 = (props) => {

    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      props.setYear(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
  
    return (
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">Select Year</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={props.Year}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                <Checkbox checked={props.Year.indexOf(year) > -1} />
                <ListItemText primary={year} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
    </div>
    )
}

export default Select1