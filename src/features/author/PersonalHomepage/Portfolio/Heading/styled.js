import styled from "styled-components";
import { ReactComponent as GitHubIcon } from "../../../../../images/github.svg";

export const Wrapper = styled.div`
    text-align: center;
`;

export const Icon = styled(GitHubIcon)`
    width: 40px;
    height: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        width: 32px;
        height: 32px;
    }
`;

export const Header = styled.h2`
    font-size: 30px;
    font-weight: 900;
    color: ${({ theme }) => theme.color.sectionTitle};
    margin: 12px 0 0 0;
    transition: 0.3s;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        font-size: 18px;
    }
`;

export const SubHeader = styled.h3`
    color: ${({ theme }) => theme.color.sectionTitle};
    font-size: 20px;
    line-height: 1.4;
    margin: 8px 0 0 0;
    font-weight: 400;
    transition: 0.3s;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        font-size: 17px;
    }
`;