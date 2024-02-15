import { Wrapper, Image, ThisIs, Name, AboutMe, Content, StyledButtonLink, Icon } from "./styled";
import photo from "../../../../images/Andrzej.jpg";
import { email } from "../../../../common/data";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Header = () => {
    return (
        <Wrapper>
            <ThemeSwitcher />
            <Image src={photo} alt="Andrzej Hryniewicz" />
            <AboutMe>
                <ThisIs>This is</ThisIs>
                <Name>Andrzej Hryniewicz</Name>
                <Content>
                    👦💻 I'm an impassioned  Frontend Developer. In free time I'm developing
                    my skills in&nbsp;React and searching new learning possibilities. In&nbsp;the future I want
                    to work on interesting, large projects.
                </Content>
                <StyledButtonLink
                    href={`mailto:${email}`}
                    title={email}
                    rel="noreferrer noopener">
                    <Icon />
                    Hire Me
                </StyledButtonLink>
            </AboutMe>
        </Wrapper>
    )
};