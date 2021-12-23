import { ThemeType } from "../../models";
import { ThemeAction } from "./actions";

export interface ThemeState {
    themeType: ThemeType;
}

export const initialState: ThemeState = {
    themeType: ThemeType.LIGHT
};

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
    switch (state.themeType) {
        case ThemeType.LIGHT:
            return {
                ...state,
                themeType: ThemeType.DARK,
            };
        case ThemeType.DARK:
        default:
            return {
                ...state,
                themeType: ThemeType.LIGHT,
            };
    }
};