import { Wrapper, Title, Content } from "./styled";

export const Section = ({ title, content }) => (
    <Wrapper>
        <Title>{title}</Title>
        <Content>{content}</Content>
    </Wrapper>
);