import { Reducer } from "react";
import { FetchState } from ".";
import { FetchAction, FetchActionType } from "./actions";

export interface IFetchReducer<T>
  extends Reducer<FetchState<T>, FetchAction<T>> {}

export const reducer = <T>(
  state: FetchState<T>,
  action: FetchAction<T>
): FetchState<T> => {
  const { type, payload } = action;
  switch (type) {
    case FetchActionType.INIT:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FetchActionType.SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload as T,
      };
    case FetchActionType.FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
