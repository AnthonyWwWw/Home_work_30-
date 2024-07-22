import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { taskAsyncActions } from '../../saga/asyncActions'
import { red } from '@mui/material/colors';

export default function ButtonDeleteTask({ id }) {
    const dispatch = useDispatch();

    const handleDeleteTask = () => {
            dispatch(taskAsyncActions.deleteTaskAsync(id));
    }

    return (
        <Button onClick={handleDeleteTask} sx={{ backgroundColor: red[600], '&:hover': { backgroundColor: red[900]} }}>delete</Button>
    )
}
