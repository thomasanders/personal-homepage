import { Section } from "../../../../common/Section";
import { skillList } from "../../../../common/data";
import { List } from "../../../../common/List";

export const Skills = () => (
    <Section
        title="My skillset includes 🛠️"
        content={<List skills={skillList} />}
    />
);