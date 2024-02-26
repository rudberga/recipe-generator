import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { queryClient } from '../lib/reactQuery';
import { QueryClientProvider } from "@tanstack/react-query";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
    </MantineProvider>
  );
}
