import React, {useCallback} from 'react';
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
import { Box } from '@mui/material';

export default function TaskItem() {
    const tasks = useSelector((state) => state.tasks.data);
    const dispatch = useDispatch();

    const handleSave = useCallback((id, value) => {
        dispatch(taskAsyncActions.savingAfterEditingAsync({ id, value }));
      }, [dispatch]);

    return (
        <Box>
            {tasks.map((item, index) => (
                <Box className='item' key={item.id} sx={{display: 'flex'}}>
                    <List>
                        <ListItem sx={{borderRadius: 5}}>
                            {!item.edit ? (
                                <>
                                    <ListItemText
                                        primary={item.task}
                                        sx={{
                                            width: 485,
                                            borderRadius: 5,
                                            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                                            border: '1px solid rgba(186, 185, 185, 0.87)',
                                            padding: 1,
                                            position: 'relative',
                                        }}
                                    />
                                    <Box
                                        sx={{
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
                                    </Box>
                                </>
                            ) : (
                                <TextField
                                    id={`task-${item.id}`}
                                    label={`edit-${index + 1}`}
                                    variant='outlined'
                                    defaultValue={item.task}
                                    sx={{ 
                                        backgroundColor: '#D5F0D9',  
                                        width: 485,
                                        borderRadius: 5,
                                        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                                        border: '1px solid rgba(186, 185, 185, 0.87)',
                                        position: 'relative',
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                        border: 'none',
                                        },
                                        
                                    }}}
                                    onBlur={(e) => handleSave(item.id, e.target.value)}
                                />
                            )}
                        </ListItem>
                    </List>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ButtonGroup
                            disableElevation
                            variant='contained'
                            aria-label='Disabled button group'
                            sx={{ width: 200, height: 45 }}
                        >
                            <ButtonDoneTask id={item.id} />
                            <ButtonDeleteTask id={item.id} />
                            <ButtonEditTask id={item.id} edit={item.edit} />
                        </ButtonGroup>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}
