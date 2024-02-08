import { StyledList, Dash, Item } from "./styled";

export const List = ({ skills }) => (
    <StyledList>
        {skills.map((skill) => (
            <Item key={skill}>
                <Dash />
                {skill}
            </Item>
        ))}
    </StyledList>
);