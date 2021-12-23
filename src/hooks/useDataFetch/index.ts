import axios, { AxiosResponse } from "axios";
import { useEffect, useReducer, useState } from "react";
import { FetchAction, FetchActionKind } from "./actions";
import { dataFetchReducer, FetchState } from "./reducer";

const useDataFetch =
    <T>(initialData: T, initialUrl?: string):
    [FetchState<T>, React.Dispatch<React.SetStateAction<string | undefined>>] => {
        const [url, setUrl] = useState(initialUrl);
        const initialState: FetchState<T> = {
            isLoading: false,
            isError: false,
            data: initialData
        };

        const [state, dispatch] = useReducer(dataFetchReducer, initialState);

        useEffect(() => {
            if (!url) return;
            
            let didCancel = false;

            const fetchData = async () => {
                const initAction: FetchAction<T> = {
                    type: FetchActionKind.INIT
                };
                dispatch(initAction);

                try {
                    const result: AxiosResponse<T> = await axios(url);
                    if (!didCancel) {
                        const successAction: FetchAction<T> = {
                            type: FetchActionKind.SUCCESS,
                            payload: result.data
                        };
                        dispatch(successAction);
                    }
                } catch (error) {
                    if (!didCancel) {
                        const failAction: FetchAction<T> = {
                            type: FetchActionKind.FAILURE
                        };
                        dispatch(failAction);
                    }
                }
            };

            fetchData();

            return () => { didCancel = true; };
        }, [url]);

        return [state as FetchState<T>, setUrl];
    };

export { useDataFetch };