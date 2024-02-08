import { List, Item } from "./styled";
import { socials } from "./socials";

export const SocialIcons = () => (
    <List>
        {socials.map(({ name, url, Icon }) => (
            <Item key={name}>
                <a href={url} title={name} target="_blank" rel="noreferrer">
                    <Icon />
                </a>
            </Item>
        ))}
    </List>
);