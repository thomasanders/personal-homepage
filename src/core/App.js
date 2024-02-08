import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../GlobalStyle";
import { PersonalHomepage } from "../features/author/PersonalHomepage";
import { themeDark, themeLight } from "../theme";
import { useSelector } from "react-redux";
import { selectTheme } from "../features/author/PersonalHomepage/Header/ThemeSwitcher/themeSwitchSlice";

function App() {
    const theme = useSelector(selectTheme);

    return (
        <ThemeProvider theme={theme ? themeDark : themeLight}>
            <GlobalStyle />
            <PersonalHomepage />
        </ThemeProvider>
    )
};

export default App;