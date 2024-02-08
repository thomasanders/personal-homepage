import { Error } from "./Error";
import { Loading } from "./Loading";
import { ProjectsList } from "./Projects";

export const Content = ({ status, projects }) => {
    switch (status) {
        case "loading":
            return <Loading />;

        case "success":
            return <ProjectsList projects={projects} />;

        case "error":
            return <Error />;
    }
};