import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
    margin-bottom: 30px;
`;

const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 15px;
`;

function Sect({ title, children }) {
    return (
        <SectionWrapper>
            <Title>{title}</Title> {/* заголовок */}
            {children} {/* виводить елементи передані сюди */}
        </SectionWrapper>
    );
}

export default Sect;