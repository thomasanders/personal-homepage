import { Icon, Message, StyledError, Info, StyledButtonLink } from "./styled";

export const Error = () => (
    <StyledError>
        <Icon />
        <Message>Ooops! Something went wrong...</Message>
        <Info>Sorry, failed to load Github projects.<br />You can check them directly on Github.</Info>
        <StyledButtonLink
            href={"https://github.com/thomasanders"}
            rel="noreferrer noopener">
            Go to Github
        </StyledButtonLink>
    </StyledError>
);