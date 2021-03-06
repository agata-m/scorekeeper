import React from 'react';

import { Button } from 'reactstrap';
import './Player.css';

const Player = (props) => (
    <tr className='Player' scope="row">
        <td className='Player__name'>{props.name}</td>
        <td className='Player__score'>{props.score}</td>
        <td className='Player__button_set'>
            <Button color='secondary' className='Player__button' onClick={() => props.onPlayerScoreChange(1)}>+</Button>
            <Button color='secondary' className='Player__button' onClick={() => props.onPlayerScoreChange(-1)}>-</Button>
            <Button color='danger' className='Player__button' onClick={() => props.onPlayerRemove()}>Remove player</Button>
        </td>
    </tr>
);

export default Player;