import { Icon, Info, StyledLoading } from "./styled";

export const Loading = () => (
    <StyledLoading>
        <Info>Please wait, projects are being loaded...</Info>
        <Icon />
    </StyledLoading>
);