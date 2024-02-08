import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 63px;
    max-height: auto;
    max-width: 1216px;
    background-color: ${({ theme }) => theme.color.sectionBackground};
    border-radius: 4px;
    box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02);
    padding: 32px;
    margin-bottom: 72px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        margin-top: 48px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        padding: 16px;
        margin-bottom: 50px;
    }
`;

export const Title = styled.h2`
    font-weight: 900;
    font-size: 30px;
    color: ${({ theme }) => theme.color.sectionTitle};
    padding-bottom: 15px;
    border-bottom: 1px solid ${({ theme }) => theme.color.titleUnderline};
    margin: 0;
    transition: 0.3s;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        font-size: 18px;
        padding-bottom: 12px;
    }
`;

export const Content = styled.div`
    padding: 0;
`;

