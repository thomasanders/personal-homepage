import { all } from "redux-saga/effects";
import { projectsSaga } from "./features/author/PersonalHomepage/Portfolio/projectsSaga";
import { themeSaga } from "./features/author/PersonalHomepage/Header/ThemeSwitcher/themeSaga";

export default function* rootSaga() {
    yield all([
        projectsSaga(),
        themeSaga(),
    ]);
}