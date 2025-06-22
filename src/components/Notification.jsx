import React from 'react';
import styled from 'styled-components';

const Message = styled.p`
    font-size: 18px;
    color: #999;
`;

function Notification({ message }) {
    return <Message>{message}</Message>;
}

export default Notification;