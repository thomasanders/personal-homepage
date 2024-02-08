import { List } from "./styled";
import { ProjectTile } from "./ProjectTile";

export const ProjectsList = ({ projects }) => (
    <List>
        {projects?.map(({ id, name, description, homepage, html_url }) => (
            <ProjectTile
                key={id}
                name={name}
                description={description}
                homepage={homepage}
                html_url={html_url}
            />
        ))}
    </List>
);