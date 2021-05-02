import React from 'react';
import './card-list.style.css';
import {Card} from './card-components.jsx';

export const CardList = props => (
    <div className='cardList'>
        {props.monsters.map(monsters => (
            <Card key={monsters.id} monsters={monsters} />
        ))}
    </div>
);


