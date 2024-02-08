import { useDispatch, useSelector } from "react-redux";
import { Content } from "./Content";
import { Heading } from "./Heading";
import { fetchProjects, selectProjects, selectProjectsStatus } from "./projectsSlice";
import { useEffect } from "react";
import { Wrapper } from "./styled";

export const Portfolio = () => {
    const dispatch = useDispatch();

    const projects = useSelector(selectProjects);
    const projectsStatus = useSelector(selectProjectsStatus);

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    return (
        <Wrapper>
            <Heading />
            <Content projects={projects} status={projectsStatus} />
        </Wrapper>
    )
};