import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 592px;
    height: auto;
    background-color: ${({ theme }) => theme.color.projectTileBackground};
    border-radius: 4px;
    box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02);
    border: 6px solid rgba(209, 213, 218, 0.30);
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        border: 6px solid rgba(209, 213, 250, 1);
    } 
`;

export const Tile = styled.li`
    padding: 56px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        display: flex;
        padding: 24px;
        flex-direction: column;
        justify-content: center;
    }
`;

export const Name = styled.h2`
    color: ${({ theme }) => theme.color.projectName};
    font-size: 24px;
    font-weight: 700;
    transition: 0.3s;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        font-size: 16px;
    }
`;

export const Description = styled.p`
    margin: 24px 0;
    color: ${({ theme }) => theme.color.projectDescription};
    font-size: 18px;
    line-height: 1.4;
    transition: 0.3s;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) { 
        margin: 16px 0;
        font-size: 14px;
    }
`;

export const DemoLink = styled.div`
    display: grid;
    grid-gap: 8px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.color.projectDescription};
    font-size: 18px;
    line-height: 1.4;
    display: flex;
    flex-wrap: wrap;
    transition: 0.3s;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        font-size: 14px;
    }
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.color.projectLink};
    font-size: 18px;
    line-height: 1.4;
    word-break: break-word;
    transition: 0.3s;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        font-size: 14px;
    }

    &:hover {
        color: ${({ theme }) => theme.color.linkHover};
    }
`;