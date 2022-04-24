import {
  Canceler,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosPromise,
  AxiosError
} from "axios";

export type { Canceler };

// creates an object type that consists of Axios API methods: get , put , patch
// , post , and delete . These are returned from the base api function and each of them is
type AxiosMethos = Pick<
  AxiosInstance,
  "get" | "delete" | "patch" | "post" | "put"
>;

// narrows the functions that can be passed to the withAbort function to Axios
// methods defined in the AxiosMethods type.
export type WithAbortFn = AxiosMethos[keyof AxiosMethos];

// is a type for the function that is returned from the withAbort function. It
// contains allowed call signatures.
export type ApiExecutor<T> = {
  (url: string, body: unknown, config: ApiRequestConfig): AxiosPromise<T>;
  (url: string, config: ApiRequestConfig): AxiosPromise<T>;
};

export type ApiExecutorArgs =
  | [string, unknown, ApiRequestConfig]
  | [string, ApiRequestConfig];

// is an enhanced AxiosRequestConfig . API methods need to accept the
// abort method that is used to obtain a canceller function.
export type ApiRequestConfig = AxiosRequestConfig & {
  abort?: (cancel: Canceler) => void;
};
//i s basically an AxiosError .
export type ApiError = AxiosError;
