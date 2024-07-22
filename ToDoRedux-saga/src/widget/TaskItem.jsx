import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch, useSelector } from 'react-redux';
import ButtonDeleteTask from './Button/ButtonDeleteTask';
import ButtonDoneTask from './Button/ButtonDoneTask';
import ButtonEditTask from './Button/ButtonEditTask';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import { taskAsyncActions } from '../saga/asyncActions';

export default function TaskItem() {
    const tasks = useSelector((state) => state.tasks.data);
    const dispatch = useDispatch();

    const handleSave = (id, value) => {
        dispatch(taskAsyncActions.savingAfterEditingAsync({ id, value }));
    };

    return (
        <div style={{ marginTop: 50, width: 750 }}>
            {tasks.map((item, index) => (
                <div className='item' key={item.id} style={{ marginBottom: 16 }}>
                    <List>
                        <ListItem>
                            {!item.edit ? (
                                <>
                                    <ListItemText
                                        primary={item.task}
                                        style={{
                                            width: 485,
                                            borderRadius: 5,
                                            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                                            border: '1px solid rgba(186, 185, 185, 0.87)',
                                            padding: 10,
                                            position: 'relative',
                                        }}
                                    />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            width: 20,
                                            textAlign: 'center',
                                            backgroundColor: '#FFFFFF',
                                            fontSize: 10,
                                            color: 'rgba(149, 157, 165)',
                                            top: 5,
                                            left: 30,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {index + 1}
                                    </div>
                                </>
                            ) : (
                                <TextField
                                    id={`task-${item.id}`}
                                    label={`edit-${index + 1}`}
                                    variant='outlined'
                                    defaultValue={item.task}
                                    style={{ width: 485, backgroundColor: '#8FBC8F', borderRadius: 5 }}
                                    onBlur={(e) => handleSave(item.id, e.target.value)}
                                />
                            )}
                        </ListItem>
                    </List>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ButtonGroup
                            disableElevation
                            variant='contained'
                            aria-label='Disabled button group'
                            style={{ width: 200, height: 45 }}
                        >
                            <ButtonDoneTask id={item.id} />
                            <ButtonDeleteTask id={item.id} />
                            <ButtonEditTask id={item.id} />
                        </ButtonGroup>
                    </div>
                </div>
            ))}
        </div>
    );
}
