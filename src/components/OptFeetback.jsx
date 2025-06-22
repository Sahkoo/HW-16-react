import React from 'react';
import styled from 'styled-components';

const ButtonGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: ${({ theme }) => theme.buttonBg};
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
    }
`;

function FeedOpt({ options, onLeaveFeedback }) {
    return (
        <ButtonGroup>
            {options.map(option => (/* додав стилі, нижче використав метод map для створення кнопок, пройшовшись по масиву */
                <Button
                    key={option}
                    onClick={() => onLeaveFeedback(option)}
                >
                    {option}
                </Button>
            ))}
        </ButtonGroup>
    );
}

export default FeedOpt;