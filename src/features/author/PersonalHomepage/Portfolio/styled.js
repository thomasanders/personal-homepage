import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1216px;
    height: auto;
    padding-bottom: 120px;
    display: grid;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) { 
        padding-bottom: 48px;
    }
`;