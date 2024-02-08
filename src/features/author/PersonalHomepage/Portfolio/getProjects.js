import { GitHubAPI } from "../../../../common/data";

export const getProjects = async () => {
    const response = await fetch(GitHubAPI);

    if (!response.ok) {
        new Error(response.statusText);
    }
   
    return await response.json();
};