import React, { useState } from 'react';
import { Autocomplete, Paper, Typography, TextField } from '@mui/material';

const EmployeeSearch = ({ userProfileImage, dateRange, dummyData }) => {
  const [employee, setEmployee] = useState('');
  const [open, setOpen] = useState(false);

  ///Handles submission of name in search bar
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  //Fetches Employee Data based on a select Date Range and employee name
  const fetchData = async () => {};
  return (
    <form onSubmit={handleSubmit}>
      <Autocomplete
        autoSelect
        open={open}
        onOpen={() => {
          if (employee) {
            setOpen(true);
          }
        }}
        onClose={() => setOpen(false)}
        PaperComponent={({ children }) => <Paper style={{ background: '#f4f5f7' }}>{children}</Paper>}
        onInputChange={(e, value, reason) => {
          setEmployee(value);
          if (!value) {
            setOpen(false);
          }
        }}
        options={dummyData}
        getOptionLabel={(option) => `${option.FirstName} ${option.LastName}`}
        renderOption={(props, option) => (
          <Typography {...props} style={{ gap: '10px', padding: '10px 0px 10px 15px' }} variant="root" key={option.BadgeID}>
            {userProfileImage}
            {option.FirstName} {option.LastName}
          </Typography>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            className="textarea"
            autoFocus
            color="primary"
            size="small"
            placeholder={'Enter Employee Name'}
            style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              zIndex: 1200,
              width: 255,
            }}
          ></TextField>
        )}
      ></Autocomplete>
    </form>
  );
};

export default EmployeeSearch;
