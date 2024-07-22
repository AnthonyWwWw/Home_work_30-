import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { taskAsyncActions } from '../../saga/asyncActions'

export default function ButtonEditTask({id}){
    const dispatch = useDispatch();

    const editTask = () => {
        dispatch(taskAsyncActions.editTaskAsync(id));
    }

    return(
        <Button onClick={editTask}>edit</Button>
    )
}