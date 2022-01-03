import { IAction } from "../../contexts";

export enum FetchActionType {
  INIT = "INIT",
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
}

export interface FetchAction<T> extends IAction<FetchActionType, T> {}
