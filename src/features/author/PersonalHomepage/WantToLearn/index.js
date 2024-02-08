import { Section } from "../../../../common/Section";
import { futureSkillList } from "../../../../common/data";
import { List } from "../../../../common/List";

export const WantToLearn = () => (
    <Section
        title="What I want to learn next 🚀"
        content={<List skills={futureSkillList} />}
    />
);