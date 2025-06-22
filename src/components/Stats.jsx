import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    list-style: none;
    padding-left: 0;
`;

const Item = styled.li`
    font-size: 18px;
    margin-bottom: 8px;
`;

function Stats({ good, neutral, bad, total, positiveFeedback }) { /* йде перелік фідбеків: погані, добрі і тд. */ 
    return (
        <List>
            <Item>Good: {good}</Item>
            <Item>Neutral: {neutral}</Item>
            <Item>Bad: {bad}</Item>
            <Item>Total: {total}</Item>
            <Item>Positive feedback: {positiveFeedback}%</Item>
        </List>
    );
}

export default Stats;
