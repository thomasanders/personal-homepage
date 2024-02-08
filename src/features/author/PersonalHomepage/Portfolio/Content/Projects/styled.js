import styled from "styled-components";

export const List = styled.ul`
    margin: 24px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
    padding: 0;
    grid-gap: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        grid-template-columns: 1fr;
    }
`;