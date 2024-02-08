import { styled } from "styled-components";

export const Wrapper = styled.div`
    max-width: 1216px;
    margin: 0 auto;
    padding: 115px 15px 0 15px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        padding-top: 45px;
    }
`;