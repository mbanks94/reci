import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { FetchActionType } from "./actions";
import { IFetchReducer, reducer } from "./reducer";

export interface FetchState<T> {
  isLoading: boolean;
  isError: boolean;
  data: T | T[] | undefined;
}

interface IUseFetch<T> {
  fetchState: FetchState<T>;
  setUrl: Dispatch<SetStateAction<string>>;
  get: () => Promise<void>;
  post: (payload: T) => Promise<void>;
  put: (payload: T) => Promise<void>;
  del: () => Promise<void>;
}

export const useFetch = <T>(initialUrl?: string): IUseFetch<T> => {
  const initialState: FetchState<T> = {
    isLoading: false,
    isError: false,
    data: undefined,
  };

  const [url, setUrl] = useState("");

  useEffect(() => {
    if (!!initialUrl) {
      setUrl(initialUrl);
    }
  }, [initialUrl]);

  const [fetchState, dispatch] = useReducer<IFetchReducer<T>>(
    reducer,
    initialState
  );

  const fetchInit = useCallback(() => {
    dispatch({
      type: FetchActionType.INIT,
    });
  }, []);

  const fetchError = useCallback((error: any) => {
    handleError(error);
    dispatch({
      type: FetchActionType.FAILURE,
    });
  }, []);

  const fetchSuccess = useCallback((payload: T | T[]) => {
    dispatch({
      type: FetchActionType.SUCCESS,
      payload: payload,
    });
  }, []);

  const get = useCallback(async () => {
    fetchInit();
    try {
      const response = (await fetch(url, getRequestInit("GET")).then(
        async (res) => await handleResponse(res)
      )) as T[];
      fetchSuccess(response);
    } catch (error) {
      fetchError(error);
    }
  }, [fetchError, fetchInit, fetchSuccess, url]);

  const post = useCallback(
    async (payload: T) => {
      fetchInit();
      try {
        const response = (await fetch(
          url,
          getRequestInit("POST", payload)
        ).then(async (res) => await handleResponse(res))) as T;
        fetchSuccess(response);
      } catch (error) {
        fetchError(error);
      }
    },
    [fetchError, fetchInit, fetchSuccess, url]
  );

  const put = useCallback(
    async (payload: T) => {
      fetchInit();
      try {
        const response = (await fetch(url, getRequestInit("PUT", payload)).then(
          async (res) => await handleResponse(res)
        )) as T;
        fetchSuccess(response);
      } catch (error) {
        fetchError(error);
      }
    },
    [fetchError, fetchInit, fetchSuccess, url]
  );

  const del = useCallback(async () => {
    fetchInit();
    try {
      const response = (await fetch(url, getRequestInit("DELETE")).then(
        async (res) => await handleResponse(res)
      )) as T;
      fetchSuccess(response);
    } catch (error) {
      fetchError(error);
    }
  }, [fetchError, fetchInit, fetchSuccess, url]);

  const value = useMemo(
    () => ({
      fetchState,
      setUrl,
      get,
      post,
      put,
      del,
    }),
    [fetchState, setUrl, get, post, put, del]
  );

  return value;
};

type Method = "GET" | "POST" | "PUT" | "DELETE";
const getRequestInit = (method: Method, body?: any): RequestInit => {
  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
};

interface ErrorResponse {
  statusCode: number;
  message: string;
}
const handleResponse = (res: Response): Promise<any> | undefined => {
  if (!res.ok) {
    const errorRes: ErrorResponse = {
      statusCode: res.status,
      message: res.statusText,
    };
    throw errorRes;
  }

  try {
    return res.json();
  } catch {
    return undefined;
  }
};

const handleError = (error: any) => {
  // make a toast with error message
  console.log(error);
};
