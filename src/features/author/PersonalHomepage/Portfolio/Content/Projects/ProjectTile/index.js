import { Wrapper, Tile, Name, Description, DemoLink, Link } from "./styled";

export const ProjectTile = ({ id, name, description, homepage, html_url }) => (
    <Wrapper>
        <Tile key={id}>
            <Name>{name}</Name>
            <Description>{description}</Description>
            <DemoLink>
                Demo: <Link target="_blank" rel="noreferrer" href={homepage}>{homepage}</Link>
            </DemoLink>
            <DemoLink>
                Code: <Link target="_blank" rel="noreferrer" href={html_url}>{html_url}</Link>
            </DemoLink>
        </Tile>
    </Wrapper>
);