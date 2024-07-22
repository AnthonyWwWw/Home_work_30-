import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { taskAsyncActions } from '../../saga/asyncActions';

export default function ButtonDoneTask({ id }) {
  const dispatch = useDispatch();

  const handleDoneTask = () => {
      dispatch(taskAsyncActions.doneTaskAsync(id));
      dispatch 
  }

  return (
    <Button onClick={handleDoneTask}>done</Button>
  )
}
