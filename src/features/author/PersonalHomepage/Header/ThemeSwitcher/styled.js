import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "../../../../../images/sun.svg";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 160px;
    height: 26px;
    position: absolute;
    right: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        width: 50px;
    }
`;

export const Name = styled.p`
    color: ${({ theme }) => theme.color.switchButton};
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;
    text-transform: uppercase;
    margin: auto;
    transition: 0.3s;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        display: none;
    }
`;

export const Button = styled.button`
    height: 26px;
    width: 48px;
    border: 1px solid ${({ theme }) => theme.color.switchBorder};
    border-radius: 30px;
    cursor: pointer;
    background: ${({ theme }) => theme.color.switchBackground};
    display: flex;
    align-items: center;
    padding: 2px;
`;

export const IconWrapper = styled.div`
    display: flex;
    background: ${({ theme }) => theme.color.switchIconWrapper};
    padding: 4px;
    border-radius: 50%;
    transition: 0.3s;

    ${({ moveTheButtonToTheRight }) =>
        moveTheButtonToTheRight &&
        css`
        transform: translateX(20px);
    `} 
`;

export const Sun = styled(SunIcon)`
    fill: ${({ theme }) => theme.color.switchSun};
`;