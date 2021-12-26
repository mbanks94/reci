import { Entity } from "../models";

export const replaceInCollection = <T extends Entity>(
    collection: T[],
    orignal: T,
    replacement: T,
    sorter?: (a: T, b: T) => number,
): T[] => {
    const newCollection = collection.filter(({ id }) => id !== orignal.id);

    newCollection.push(replacement);

    return !!sorter ? newCollection.sort(sorter) : newCollection;
};

// export const getTheme = (themeType: ThemeType): Theme => {
//     switch (themeType) {
//         case ThemeType.DARK:
//             return {
//                 background: "#282C34",
//                 button_1: "",
//                 button_2: "",
//                 button_3: "",
//                 footer_background: "#f7f7f7",
//                 foreground_1: "#ffffff",
//                 foreground_1_text: "#000000",
//                 foreground_2: "#20232a",
//                 foreground_2_text: "#ffffff",
//                 header_background: "#f7f7f7",
//             };
//         case ThemeType.LIGHT:
//         default:
//             return {
//                 background: "#000000",
//                 button_1: "",
//                 button_2: "",
//                 button_3: "",
//                 footer_background: "#20232a",
//                 foreground_1: "#282C34",
//                 foreground_1_text: "#ffffff",
//                 foreground_2: "#f7f7f7",
//                 foreground_2_text: "#6d6d6d",
//                 header_background: "#20232a",
//             };
//     }
// }
