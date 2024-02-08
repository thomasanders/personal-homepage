import { select, call, takeEvery } from "redux-saga/effects";
import { selectTheme } from "./themeSwitchSlice";
import { saveThemeInLocalStorage } from "./themeLocalStorage";

function* saveThemeInLocalStorageHandler() {
    const theme = yield select(selectTheme);
    yield call(saveThemeInLocalStorage, theme);
}

export function* themeSaga() {
    yield takeEvery("*", saveThemeInLocalStorageHandler);
}