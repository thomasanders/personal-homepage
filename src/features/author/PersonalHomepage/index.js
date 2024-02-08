import Container from "../../../common/Container";
import { Header } from "./Header";
import { Skills } from "./Skills";
import { WantToLearn } from "./WantToLearn";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";

export const PersonalHomepage = () => {
    return (
        <Container>
            <Header />
            <Skills />
            <WantToLearn />
            <Portfolio />
            <Contact />
        </Container>
    )
};