import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { routes } from '../config/routes';

function MenuList() {
    return (
        <nav className='menu'>
            <NavLink to={routes.main.path}><Button size='small' style={{ color: '#E7EAEF', fontSize: 30 }}>ToDo</Button></NavLink>
            <NavLink to={routes.done.path}><Button size='small' style={{ color: '#E7EAEF', fontSize: 30 }}>Done Task</Button></NavLink>
            <NavLink to={routes.history.path}><Button size='small' style={{ color: '#E7EAEF', fontSize: 30 }}>History</Button></NavLink>
        </nav>
    );
}

export default MenuList;
