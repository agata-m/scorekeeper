import React from 'react';
import Player from '../Player/Player';

import { Table } from 'reactstrap';
import './PlayersList.css';

const PlayersList = (props) => (

    <Table dark>
        <thead>
            <tr>
                <th>Name</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody className='PlayersList'>
            {props.players.map((player, i) => (
                <Player
                    key={i}
                    name={player.name}
                    score={player.score}
                    onPlayerScoreChange={(points) => props.onScoreUpdate(i, points)}
                    onPlayerRemove={() => props.onPlayerRemove(i)}
                />)
            )}
        </tbody>
    </Table>
);

export default PlayersList;