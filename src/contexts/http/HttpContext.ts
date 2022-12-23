import { createContext } from "react";
import { UseInfiniteQueryResult, UseMutationResult, UseQueryOptions, UseQueryResult } from "react-query";
import { Page } from "../../models";

export type QueryKeyT = [string, object | undefined];

export type UseLoadMoreArgs = {
    url: string | null,
    params?: object,
};

export type UseFetchArgs<T> = {
    url: string | null,
    params?: object,
    config?: UseQueryOptions<T, Error, T, QueryKeyT>,
};

export type UseDeleteArgs<T> = {
    url: string,
    params?: object,
    updater?: (oldData: T, id: string | number) => T,
};

export type UseMutationArgs<T, S> = {
    url: string,
    params?: object,
    updater?: (oldData: T, newData: S) => T,
};

export type HttpContext = {
    useDelete: <T>(args: UseDeleteArgs<T>) => UseMutationResult<string | number, unknown, string | number | T, unknown>;
    useFetch: <T>(args: UseFetchArgs<T>) => UseQueryResult<T, Error>,
    useLoadMore: <T>(args: UseLoadMoreArgs) => UseInfiniteQueryResult<Page<T>, Error>,
    usePatch: <T, S>(args: UseMutationArgs<T, S>) => UseMutationResult<S, unknown, T | S, unknown>;
    usePost: <T, S>(args: UseMutationArgs<T, S>) => UseMutationResult<S, unknown, T | S, unknown>;
};

export const HttpContext = createContext<HttpContext | undefined>(undefined);