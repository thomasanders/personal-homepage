import { SocialIcons } from "./SocialIcons";
import { AboutMe, Email, LetsTalk, Wrapper } from "./styled";
import { email } from "../../../../common/data";

export const Contact = () => (
    <Wrapper>
        <LetsTalk>Let’s talk!</LetsTalk>
        <Email
            href={`mailto:${email}`}>
            andrzej.krzysztof.hryniewicz@gmail.com
        </Email>
        <AboutMe>I’m always open to new projects whenever I have the time. If you have a&nbsp;website,
            dashboard or mobile app in mind and need some help to make your ideas come to life,
            feel free to contact me. 🤞
        </AboutMe>
        <SocialIcons />
    </Wrapper>
);