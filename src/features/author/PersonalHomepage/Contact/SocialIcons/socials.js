import { StyledIcon } from "./styled";
import { ReactComponent as GitHubIcon } from "../../../../../images/GitHub-black.svg";
import { ReactComponent as LinkedINIcon } from "../../../../../images/LinkedIN.svg";

export const socials = [
    {
        name: "GitHub",
        url: "https://github.com/thomasanders",
        Icon: StyledIcon(GitHubIcon),
    },

    {
        name: "LinkedIN",
        Icon: StyledIcon(LinkedINIcon),
        url:"https://www.linkedin.com/in/7stars/",
    },

];