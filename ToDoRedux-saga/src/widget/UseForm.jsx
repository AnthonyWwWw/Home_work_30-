import React from 'react';
import TextField from '@mui/material/TextField';
import ButtonAddTask from './Button/ButtonAddTask';
import ButtonClear from './Button/ButtonClear';
import { Field } from 'formik';
import { Box } from '@mui/material';

function UseForm({id,label}){
    return(
        <Box sx={{display: 'flex',alignItems: 'center'}}>
            <Field
            name='task'
            as={TextField}
            label={label}
            id={id}
            sx={{ width: 500}}
            />
            <ButtonAddTask></ButtonAddTask>
            <ButtonClear></ButtonClear>
       </Box>
    )

}

export default UseForm;