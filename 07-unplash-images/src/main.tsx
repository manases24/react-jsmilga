import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { App } from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient();
const apiKey = import.meta.env.VITE_API_KEY;

console.log('API Key:', apiKey);
console.log('Environment Variables:', import.meta.env);


createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
