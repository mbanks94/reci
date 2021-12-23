import { FetchAction, FetchActionKind } from "./actions";

export interface FetchState<T> {
    isLoading: boolean;
    isError: boolean;
    data?: T;
}

export const dataFetchReducer = <T>(state: FetchState<T>, action: FetchAction<T>): FetchState<T> => {
    switch (action.type) {
        case FetchActionKind.INIT:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case FetchActionKind.SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload
            };
        case FetchActionKind.FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        default:
            return { ...state };
    }
};