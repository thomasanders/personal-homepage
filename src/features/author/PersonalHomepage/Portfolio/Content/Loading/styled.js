import styled, { keyframes } from "styled-components";
import { ReactComponent as LoadingIcon } from "../../../../../../images/spinner.svg";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const StyledLoading = styled.div`
    text-align: center;
    margin-top: 88px;
`;

export const Info = styled.span`
    color: ${({ theme }) => theme.color.infoLoading};
    font-size: 20px;
    line-height: 1.4;
    display: block;
    margin-bottom: 48px;
`;

export const Icon = styled(LoadingIcon)`
    width: 160px;
    height: 160px;
    margin-bottom: 140px;
    animation: ${rotate} 1s linear infinite;
`;