import React from 'react'
import './TodoItem.css'
import Checkbox from '@material-ui/core/Checkbox'
import { setChecK } from '../features/todoSlice'
import { useDispatch } from 'react-redux';

function TodoItem({ name, done, id }) {
    const dispatch = useDispatch();

    const handleCheck = () => {

        dispatch(setChecK(id));
    }

    return (
        <div className="todoItem">
            {/** checkbox */}
            <Checkbox
                checked={done}
                color='primary'
                onChange={handleCheck}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <p className={done ? 'todoItem--done' : null}>{name}</p>
        </div>
    )
}

export default TodoItem
