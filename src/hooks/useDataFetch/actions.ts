export enum FetchActionKind {
    INIT = "INIT",
    SUCCESS = "SUCCESS",
    FAILURE = "FAILURE"
};

export interface FetchAction<T> {
    type: FetchActionKind;
    payload?: T;
}