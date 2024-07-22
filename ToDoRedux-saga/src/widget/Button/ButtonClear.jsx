import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { taskAsyncActions } from '../../saga/asyncActions';

export default function ButtonClear() {
    const dispatch = useDispatch();

    const handleClearTasksList = () => {
        dispatch(taskAsyncActions.clearTasksAsync());
    };

    return (
        <Button variant='contained' type='button' onClick={handleClearTasksList} style={{ width: 100, height: 45, marginLeft: 10 }}>
            Clear
        </Button>
    );
}
