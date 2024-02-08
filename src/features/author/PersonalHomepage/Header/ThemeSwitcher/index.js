import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "./themeSwitchSlice";
import { Wrapper, Name, Button, IconWrapper, Sun } from "./styled";

export const ThemeSwitcher = () => {
    const dispatch = useDispatch();
    const themeSwitch = useSelector(selectTheme);

    return (
        <Wrapper>
            <Name>Dark mode {themeSwitch ? "on" : "off"}</Name>
            <Button
                onClick={() => dispatch(toggleTheme())}
            >
                <IconWrapper moveTheButtonToTheRight={themeSwitch}>
                    <Sun />
                </IconWrapper>
            </Button>
        </Wrapper>
    )
};