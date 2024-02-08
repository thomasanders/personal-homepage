import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import projectsReducer from "./features/author/PersonalHomepage/Portfolio/projectsSlice";
import themeSwitchReducer from "./features/author/PersonalHomepage/Header/ThemeSwitcher/themeSwitchSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        projects: projectsReducer,
        themeSwitch: themeSwitchReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;