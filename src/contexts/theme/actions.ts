import { IAction } from "..";
import { ThemeType } from "../../models";

export enum ThemeActionType {
    TOGGLE_THEME_TYPE = "TOGGLE_THEME_TYPE",
}

export interface ThemeAction extends IAction<ThemeActionType, ThemeType> { }

export const setThemeType = (dispatch: (action: ThemeAction) => void) => {
    dispatch({
        type: ThemeActionType.TOGGLE_THEME_TYPE
    });
};