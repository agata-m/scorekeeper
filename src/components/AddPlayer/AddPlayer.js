import React from 'react';

import { Button, Form } from 'reactstrap';
import './AddPlayer.css';

const AddPlayer = (props) => {

    let input;

    const onSubmit = (event) => {
        event.preventDefault();
        props.onPlayerAdd(input.value);
        input.value = '';
    }

    return (
        <Form inline className='AddPlayer' onSubmit={onSubmit}>
            <input type='text' placeholder='Enter player name' className='AddPlayer__input' ref={(node) => input = node} />
            <Button type='submit' className='AddPlayer__submit' value='Add'>Add</Button>
        </Form>
    )
};

export default AddPlayer;