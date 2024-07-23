import React, { useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useSelector, useDispatch } from 'react-redux';
import { taskAsyncActions } from '../saga/asyncActions';

function DoneTask() {
  const doneTasks = useSelector((state) => state.doneTasks.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(taskAsyncActions.loadDoneTasksAsync());
  }, [dispatch]);

  return (
    <List sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
      {doneTasks.map((item) => (
        <ListItem key={item.id} disablePadding>
          <ListItemText
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
            }}
          >
            <ListItemText primary={item.task} />
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}

export default DoneTask;
