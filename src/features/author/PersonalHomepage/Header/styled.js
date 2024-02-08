import { styled } from "styled-components";
import { ReactComponent as EmailIcon } from "../../../../images/Message.svg";
import { ButtonLink } from "../ButtonLink";

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 3fr 1fr;
    grid-gap: 64px;
    align-self: center;
    position: relative;
    padding-bottom: 15px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
`;

export const Image = styled.img`
    width: 398px;
    height: 398px;
    border-radius: 50%;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        width: 300px;
        height: 300px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        width: 175px;
        height: 175px;
    }
`;

export const AboutMe = styled.div`
    max-width: 633px;
`;

export const ThisIs = styled.p`
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.thisIs};
    text-transform: uppercase;
    margin-top: 50px;
    transition: 0.3s;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        margin-top: 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        margin-top: 12px;
    }
`;

export const Name = styled.h1`
    font-size: 38px;
    font-weight: 900;
    color: ${({ theme }) => theme.color.sectionTitle};
    transition: 0.3s;

    @media(max-width: ${({ theme }) => theme.breakpoint.narrow}) {
        font-size: 22px;
        letter-spacing: 1.1px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) { 
        margin-top: 8px;
    }
`;

export const Content = styled.p`
    font-size: 20px;
    line-height: 1.4;
    text-align: justify;
    color: ${({ theme }) => theme.color.aboutMe};
    transition: 0.3s;

    @media(max-width: ${({ theme }) => theme.breakpoint.narrow}) { 
        font-size: 17px;
        letter-spacing: 0.85px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) { 
        margin-top: 16px;
    }
`;

export const StyledButtonLink = styled(ButtonLink)`
    margin-top: 32px;
    display: inline-flex;
    gap: 16px;

    &:hover {
        box-shadow: 0px 0px 0px 2px rgba(0, 160, 255, 1);
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        gap: 12px;
        margin-top: 24px;
    }
`;

export const Icon = styled(EmailIcon)`
    height: 24px;
    width: 24px;
`;