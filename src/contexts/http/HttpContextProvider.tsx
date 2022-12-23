import { PropsWithChildren, useCallback, useMemo } from "react";
import { QueryFunctionContext, useInfiniteQuery, useMutation, useQuery } from "react-query";
import { api, queryClient } from "../../api";
import { Page } from "../../models";
import { useAuth } from "../auth";
import { HttpContext, QueryKeyT, UseDeleteArgs, UseFetchArgs, UseLoadMoreArgs, UseMutationArgs } from "./HttpContext";

type UseGenericMutationArgs<T, S> = UseMutationArgs<T, S> & {
    mutationFn: (data: T | S) => Promise<S>,
}

export const HttpContextProvider = (props: PropsWithChildren) => {
    const { authState: { accessToken } } = useAuth();

    const authHeader = useMemo(() => ({
        "Authorization": `Bearer ${accessToken}`
    }), [accessToken]);

    const fetcher = useCallback(
        async <T,>({
            queryKey,
            pageParam
        }: QueryFunctionContext<QueryKeyT>): Promise<T> => {
            const [url, params] = queryKey;
            const res = await api
                .get<T>(
                    url,
                    {
                        headers: {
                            ...authHeader,
                        },
                        params: { ...params, pageParam }
                    }
                );
            return res.data;
        },
        [authHeader]
    );

    const useFetch = <T,>({
        url,
        params,
        config
    }: UseFetchArgs<T>) => {
        return useQuery<T, Error, T, QueryKeyT>(
            [url!, params],
            ({ queryKey }) => fetcher({ queryKey, meta: undefined }),
            {
                enabled: !!url,
                ...config,
            }
        );
    };

    const useLoadMore = <T,>({
        url,
        params
    }: UseLoadMoreArgs) => {
        return useInfiniteQuery<Page<T>, Error, Page<T>, QueryKeyT>(
            [url!, params],
            ({ queryKey, pageParam = 1 }) => fetcher({ queryKey, pageParam, meta: undefined }),
            {
                getPreviousPageParam: (firstPage) => firstPage.prev ?? false,
                getNextPageParam: (lastPage) => lastPage.next ?? false,
            },
        );
    };

    const useGenericMutation = <T, S>({
        mutationFn,
        url,
        params,
        updater
    }: UseGenericMutationArgs<T, S>) => {
        const queryKey = [url!, params];
        return useMutation(mutationFn, {
            onMutate: async (data) => {
                await queryClient.cancelQueries(queryKey);

                const prevData = queryClient.getQueryData(queryKey);
                queryClient.setQueryData<T>(
                    queryKey,
                    (oldData) => updater ? updater(oldData!, data as S) : (data as T)
                );

                return prevData;
            },
            onError: (err, _, context) => {
                queryClient.setQueryData(queryKey, context);
            },
            onSettled: () => {
                queryClient.invalidateQueries(queryKey);
            },
        });
    };

    const useDelete = <T,>(args: UseDeleteArgs<T>) => {
        return useGenericMutation<T, string | number>({
            mutationFn: (id) => api.delete(`${args.url}/${id}`),
            ...args,
        });
    };

    const usePost = <T, S>(args: UseMutationArgs<T, S>) => {
        return useGenericMutation<T, S>({
            mutationFn: async (data) => {
                const res = await api.post<S>(args.url, data);
                return res.data;
            },
            ...args,
        });
    };

    const usePatch = <T, S>(args: UseMutationArgs<T, S>) => {
        return useGenericMutation<T, S>({
            mutationFn: async (data) => {
                const res = await api.patch<S>(args.url, data);
                return res.data;
            },
            ...args,
        });
    };

    const value = {
        useDelete,
        useFetch,
        useLoadMore,
        usePost,
        usePatch,
    };

    return <HttpContext.Provider value={value} {...props} />
};