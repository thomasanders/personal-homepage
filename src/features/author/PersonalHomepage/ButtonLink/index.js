import styled from "styled-components";

export const ButtonLink = styled.a`
    padding: 12px 16px;
    background-color: ${({ theme }) => theme.color.buttonLinkBackground};
    color: ${({ theme }) => theme.color.buttonLinkName};
    border-radius: 4px;
    font-size: 20.058px;
    font-weight: 600;
    border: none;
    text-decoration: none;
    transition: 0.3s;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        font-size: 18px;
    }
`;