import styled from 'styled-components';

export const Cards = styled.div`
    height: 500px;
    width: 500px;
    border-radius: 12px;
    background-color: ${props => props.theme.colors.primary};;
    color: ${props => props.theme.colors.text};
    display: flex;
    align-items: center;
    padding: 0 30px;
    justify-content: space-between;
`
