"use client";

import { Provider } from "react-redux";
import ModalProvider from "./modalContext";
import ToggleProvider from "./togglesContext";
import { store } from "@/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import LoaderProvider from "./loaderContext";

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <LoaderProvider>
          <ToggleProvider>
            <ModalProvider>{children}</ModalProvider>
          </ToggleProvider>
        </LoaderProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}
