import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        projects: null,
        status: "loading",
    },
    reducers: {
        fetchProjects: (state) => {
            state.status = "loading"
        },
        fetchProjectsSuccess: (state, { payload: projects }) => {
            state.projects = projects
            state.status = "success"
        },
        fetchProjectsError: (state) => {
            state.status = "error"
        },
    },
});

export const {
    fetchProjects,
    fetchProjectsSuccess,
    fetchProjectsError
} = projectsSlice.actions;


export const selectProjectsState = state => state.projects;

export const selectProjects = state => selectProjectsState(state).projects;
export const selectProjectsStatus = state => selectProjectsState(state).status;

export default projectsSlice.reducer;