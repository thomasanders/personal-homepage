import { delay, call, put, takeLatest } from "redux-saga/effects";
import { getProjects } from "./getProjects";
import { fetchProjectsError, fetchProjects, fetchProjectsSuccess } from "./projectsSlice";

function* fetchProjectsHandler() {
    try {
        yield delay(2000);
        const projects = yield call(getProjects);
        yield put(fetchProjectsSuccess(projects));
    } catch (error) {
        yield put(fetchProjectsError());
    }
}

export function* projectsSaga() {
    yield takeLatest(fetchProjects.type, fetchProjectsHandler);
}