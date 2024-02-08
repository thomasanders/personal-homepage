import styled from "styled-components";

export const StyledIcon = Icon => styled(Icon)`
    height: auto;
    fill: ${({ theme }) => theme.color.icons};
    transition: 0.3s;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        width: 32px;
        height: 32px;
    }

    &:hover {
        fill: ${({ theme }) => theme.color.iconHover};
    }
`;

export const List = styled.ul`
    display: flex;
    gap: 24px;
    align-items: flex-start;
    padding: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        gap: 16px;
    }
`;

export const Item = styled.li`
    list-style: none;
`;