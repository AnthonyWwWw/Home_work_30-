import React from 'react';
import TextField from '@mui/material/TextField';
import ButtonAddTask from './Button/ButtonAddTask';
import ButtonClear from './Button/ButtonClear';
import { Field } from 'formik';

function UseForm({id,label}){
    return(
        <div style={{display: 'flex',alignItems: 'center'}}>
            <Field
            name='task'
            as={TextField}
            label={label}
            id={id}
            style={{ width: 500}}
            />
            <ButtonAddTask></ButtonAddTask>
            <ButtonClear></ButtonClear>
       </div>
    )

}

export default UseForm;