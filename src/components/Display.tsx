import { LaravelError, LaravelSuccess, LaravelResponse } from "@mcsoud/types";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { ReactNode, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

interface LaravelProps<T, E> {
  query: ReturnType<typeof useQuery<LaravelResponse<T, E>, unknown>>;
  toastError?:
    | string
    | ((err: AxiosError<LaravelError<E>> | undefined) => string | ReactNode);
  toastSuccess?: string | ((res: LaravelSuccess<T>) => string | ReactNode);
}

interface LaravelDisplay<T, E> {
  success: (data: T) => ReactNode;
  loading?: ReactNode;
  error?: (err: AxiosError<LaravelError<E>>) => ReactNode;
}

interface UIOptions {
  loading: ReactNode;
  error: ReactNode;
  errorToast: string;
  modals: string[];
}

export const UI_OPTIONS: UIOptions = {
  loading: <p>Loading...</p>,
  error: <p>Something went wrong</p>,
  errorToast: "Something went wrong",
  modals: [] as const,
};

export default function useLaravelQuery<T, E = unknown>({
  query,
  toastError,
  toastSuccess,
}: LaravelProps<T, E>) {
  const { data, isSuccess, isError, error } = query;
  useEffect(() => {
    if (isSuccess && data?.success) {
      if (toastSuccess)
        toast.success(
          typeof toastSuccess === "string"
            ? toastSuccess
            : toastSuccess(data.data as LaravelSuccess<T>)
        );
    }
    if (isError) {
      console.error(data);
      toast.error(
        toastError
          ? typeof toastError === "string"
            ? toastError
            : toastError(error as AxiosError<LaravelError<E>>)
          : (error as AxiosError<LaravelError<E>>).response?.data.message ??
              UI_OPTIONS.errorToast
      );
    }
  }, [isSuccess, isError]);
  function Display({ success, error, loading }: LaravelDisplay<T, E>) {
    const { data, isLoading, isSuccess, error: err } = query;
    if (isLoading) return <>{loading ?? UI_OPTIONS.loading}</>;
    return (
      <>
        {isSuccess
          ? data?.success && success(data.data)
          : error
          ? error(err as AxiosError<LaravelError<E>>)
          : UI_OPTIONS.error}
      </>
    );
  }
  return Display;
}
