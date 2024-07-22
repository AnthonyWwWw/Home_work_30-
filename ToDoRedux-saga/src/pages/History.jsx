import React, { useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useSelector, useDispatch } from 'react-redux'; 
import { taskAsyncActions } from '../saga/asyncActions';

function History() {
  const deletedTasks = useSelector((state) => state.deleteTask.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(taskAsyncActions.loadHistoryTasksAsync());
  }, [dispatch]);

  return (
    <div>
      <List>
        {deletedTasks.map((item) => (
          <ListItem key={item.id} disablePadding>
              <ListItemText primary={item.task} 
               sx={{
                width: 500,
                textAlign: 'center',
                background:'#1976d2',
                margin: 1,
                color: '#FFFF',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  borderBottom: '1px solid red',
                }
              }}/>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default History;